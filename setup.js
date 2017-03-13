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
    Navigator,
} from 'react-native';
import Main from './js/component/Main'
import ComA from './js/component/ComA'
import ComB from './js/component/ComB'
import ComC from './js/component/ComC'
import ComHttp from './js/component/ComHttp';
import ComLifeCycle from './js/component/ComLifeCycle';
import ComListView from './js/component/ComListView';
import ComLogin from './js/component/ComLogin';
import ComNews from './js/component/ComNews'
import ComWebView from './js/component/ComWebView'
import ModalDemo from './js/component/ModalDemo'
import FetchG from './js/component/FetchG'

export default class setup extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Navigator
                    initialRoute={{name:"Main",}}
                    renderScene={(route,nav)=>{
                        switch (route.name) {
                            case 'Main':
                                return <Main navigator={nav} title="Main"/ >;
                            case 'ComA':
                                return <ComA navigator={nav} title="ComA"/ >;
                            case 'ComB':
                                return (<ComB navigator={nav} title="ComB"/ >);
                            case 'ComC':
                                return (<ComC navigator={nav} title="ComC"/ >);
                            case 'ComHttp':
                                return (<ComHttp navigator={nav} title="ComHttp"/ >);
                            case 'ComLifeCycle':
                                return (<ComLifeCycle navigator={nav} title="ComLifeCycle"/ >);
                            case 'ComListView':
                                return (<ComListView navigator={nav} title="ComListView"/ >);
                            case 'ComLogin':
                                return (<ComLogin navigator={nav} title="ComLogin"/ >);
                            case 'ComNews':
                                return (<ComNews navigator={nav} title="ComNews"/ >);
                            case 'ComWebView':
                                return (<ComWebView navigator={nav} title="ComWebView"/ >);
                            case 'ModalDemo':
                                return (<ModalDemo navigator={nav} title="ModalDemo"/ >);
                            case 'FetchG':
                                return (<FetchG navigator={nav} title="FetchG"/ >);
                        }
                    }}
                />

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

