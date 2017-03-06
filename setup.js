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
} from 'react-native';
import HelloComponent from './MyComponent';
import LifeCycleComponent from './LifeCycleComponent';

export default class setup extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <HelloComponent/>
                    <LifeCycleComponent/>
                    {/*<Textinput></Textinput>*/}
                    <Image style={{width:200,height:120}}
                           source={{uri:'https://img3.doubanio.com/view/dale-online/dale_ad/public/38cc50559ee9d78.jpg'}}></Image>
                    <Image style={{width:300,height:240}}
                           source={{uri:'http://ww4.sinaimg.cn/mw690/d0a5385bjw1fcvq1fzsavj218w0u04qp.jpg'}}></Image>
                </View>
            </ScrollView>
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
            fontSize: 20,
            textAlign: 'center',
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

