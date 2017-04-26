/**
 * Created by 乐城 on 2017/4/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    DeviceEventEmitter,
    AsyncStorage,
} from 'react-native';

export default class MyHttp {
    httpGet(_this, url) {       //Http异步请求
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                // this.setState({
                //     jsonStr: JSON.stringify(responseJson),//json转化成字符串      JSON.parse(jsonstr)//json=>str
                //     title: responseJson.movies[0].title, year: responseJson.movies[0].releaseYear
                // });
                DeviceEventEmitter.emit('http', responseJson);
                console.log(responseJson);
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
                return null;
            });
    };
}