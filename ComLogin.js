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
} from 'react-native';
// import ComHttp from './ComHttp'

export default class ComLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str1: '',
            str2: '',
            tv1: '',
        }
    }

    render() {
        return (
            <View style={{}}>
                <Image style={{height:50,flex:1,}}
                       source={{uri:'https://img5.doubanio.com/view/photo/photo/public/p2441999246.jpg'}}></Image>
                <Text style={{margin:10}}>请输入账号：</Text>
                <TextInput
                    style={{flex:1,height: 40, borderColor: '#279c41',borderWidth: 1,
                    borderRadius:4,marginLeft:12,marginRight:12}}
                    onChangeText={(str1) =>this.setState({str1})}
                    value={this.state.str1}/>
                <Text style={{margin:10}}>请输入密码：</Text>
                <TextInput
                    style={{flex:1,height: 40, borderColor: '#279c41',borderWidth: 1,
                    borderRadius:4,marginLeft:12,marginRight:12}}
                    onChangeText={(str2) =>this.setState({str2})}
                    value={this.state.str2}/>
                <Text style={styles.welcome}  onPress={()=>{



                }}>点击登录，内容是：{this.state.str1}</Text>
                <Text>{this.state.str2}获取的结果是：{this.state.tv1}</Text>
            </View>
        );
    }
}
//

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

        /**/

    })
    ;

