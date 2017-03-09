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
// import ComHttp from './ComHttp'

export default class ComLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str1: '',
            str2: '',
            tv1: '',
            saveDataResult: '',
        }
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
                <Image style={{height:50,flex:1,}}
                       source={{uri:'https://img5.doubanio.com/view/photo/photo/public/p2441999246.jpg'}}></Image>
                <Text style={{margin:10}}>请输入账号：</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(str1) =>this.setState({str1})}
                    value={this.state.str1}/>
                <Text style={{margin:10}}>请输入密码：</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(str2) =>this.setState({str2})}
                    value={this.state.str2}/>

                <Text style={styles.welcome} onPress={()=>{
                    var keyName = 'myname';        //存储数据的方法
                    var keyValue = this.state.str2;
                    AsyncStorage.setItem(keyName,keyValue,function(errs){
                    if (errs)       //TODO:错误处理
                        console.log('存储错误');
                    else
                        console.log('存储成功');
                    });
                }}>存储</Text>
                <Text style={{color: '#f4f4f0',}}>{this.state.str2}获取的结果是：{this.state.tv1}</Text>
                <Text style={styles.welcome} onPress={()=>{
                    var keyName = 'myname';         //读取数据的方法
                    var _this = this;
                    AsyncStorage.getItem(keyName, function (errs, result) {
                        if (!errs){                        //TODO:错误处理
                            console.log('result = ' + result);
                            _this.setState({
                                saveDataResult:result,
                            })
                        }
                        else
                            console.log('读取失败');
                    });
                }}>读取:{this.state.saveDataResult}</Text>
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

