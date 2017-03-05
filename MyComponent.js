/**
 * Created by Cheng on 2017/3/5.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Terminal:
 * react-native run-android         //运行在安卓
 */

import React, {Component} from 'react';             //ES6方式导入的包
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloComponent extends Component {
    render() {
        return <Text style="{{fontSize:20,backgroundColor:'red'}}">Hello ReactNative</Text>
    }
}

const styles = StyleSheet.create({
    container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#1f82bb',
    // },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    },
});

