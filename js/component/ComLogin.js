/**
 * Created by Cheng on 2017/3/6.
 */
/**
 * Created by Cheng on 2017/3/5.
 */
/**
 * setup被index.ios.js 和 index..android.js 一同指向，作为整个项目的入口
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Terminal:
 * react-native run-android         //运行在安卓
 * http://www.jianshu.com/p/0010aea78e10   //存储实例教程
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    AsyncStorage,
} from 'react-native';
import MyAS from './MyAS'

export default class ComLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str1: '',
            str2: '',
            tv1: '',
            saveDataResult: '',
            saveDataResult2: '111',
        }
        this.myAS = new MyAS();
    }

    saveDate() {
        var keyName = 'myname';
        var keyValue = 'qing';
        AsyncStorage.setItem(keyName, keyValue, function (errs) {
            //TODO:错误处理
            if (errs) {
                console.log('存储错误');
            }
            if (!errs) {
                console.log('存储成功');
            }
        });
        var _this = this;
        AsyncStorage.getItem(keyName, function (errs, result) {
            //TODO:错误处理
            if (!errs) {
                var num = parseInt(result, 10); //returns 10
                console.log('result = ' + num);
                _this.setState({
                    text: 'dafd'
                });
                console.log('result = ' + _this.state.text);
            }
        });
        AsyncStorage.removeItem(keyName, function (errs) {
            if (!errs) {
                console.log('移除成功');
            }
        });
    }

    render() {
        return (
            <View >
                <View style={{flexDirection: 'row',}}>
                    <Text style={{backgroundColor: '#F43E06', flex: 1, color: "#ffffff", padding: 2,}}
                          onPress={() => {
                              const {navigator} = this.props;
                              if (navigator) {
                                  navigator.pop();
                              }
                          }}>{' <- 返回首页'}</Text>
                </View>
                <Image style={{height: 50, flex: 1,}}
                       source={{uri: 'https://img5.doubanio.com/view/photo/photo/public/p2441999246.jpg'}}></Image>
                <Text style={{margin: 10}}>请输入账号：</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(str1) => this.setState({str1})}
                    value={this.state.str1}/>
                <Text style={{margin: 10}}>请输入密码：</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(str2) => this.setState({str2})}
                    value={this.state.str2}/>

                <Text style={styles.welcome} onPress={() => {
                    this.myAS.setAS("myname",this.state.str2);
                }}>存储</Text>
                <Text style={{color: '#f4f4f0',}}>{this.state.str2}获取的结果是：{this.state.tv1}</Text>
                <Text style={styles.welcome} onPress={() => {
                    var _this = this;
                    this.myAS.getAS(_this, "myname");
                }}>读取:{this.state.saveDataResult}</Text>
                <Text style={styles.welcome} onPress={() => {
                    var _this = this;
                    AsyncStorage.getItem('history', function (errs, result) {//读取方法
                        if (!errs) {                        //TODO:错误处理
                            _this.setState({
                                saveDataResult2: result,
                            });
                            console.log('result = ' + result);
                        }
                        else
                            console.log('读取失败');
                    });
                }}>读取2:{this.state.saveDataResult2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#1f82bb',
            marginTop: 50,
        },
        welcome: {
            backgroundColor: '#1f82bb',
            fontSize: 18,
            padding: 4,
            color: '#f4f4f0',
            borderRadius: 4, textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
        contentContainer: {
            paddingVertical: 20
        },
        input: {
            height: 40, marginLeft: 12, marginRight: 12,
            borderColor: '#279c41', borderWidth: 1,
            borderRadius: 2,
        }
    })
    ;

