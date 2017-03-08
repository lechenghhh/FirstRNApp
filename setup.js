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
    Textinput,
} from 'react-native';
// import ComLifeCycle from './ComLifeCycle';
import ComLogin from './ComLogin';
import ComHttp from './ComHttp';
import ComNews from './ComNews'
import ComWebView from './ComWebView'

export default class setup extends Component {
    render() {
        return (

            <View style={styles.container}>
                {/*<Text style={styles.welcome}>*/}
                {/*Welcome to React Native!*/}
                {/*</Text>*/}
                <Image style={{flex:1,}}
                       source={{uri:'http://appserver.m.bing.net/BackgroundImageService/TodayImageService.svc/GetTodayImage?dateOffset=0&urlEncodeHeaders=true&osName=windowsPhone&osVersion=8.10&orientation=480x800&deviceName=WP8&mkt=en-US'}}>
                    <ComNews/>
                </Image>
            </View>
        );
    }
}
//
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f1f0ee',
        },
        welcome: {
            fontSize: 20,
            backgroundColor: '#1f82bb',
            textAlign: 'center',
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
        },

        contentContainer: {},

        /**/

    })
    ;

