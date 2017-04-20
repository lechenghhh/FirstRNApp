/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    WebView
} from 'react-native';

WEBVIEW_REF = 'webview';

export default class TestWebView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <TouchableOpacity
                        onPress={this.goBack.bind(this)}
                    >
                        <Text style={styles.title_text}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.title_text}>
                        非著名程序员
                    </Text>
                    <TouchableOpacity
                        onPress={this.goForward.bind(this)}
                    >
                        <Text style={styles.title_text}>
                            前进
                        </Text>
                    </TouchableOpacity>
                </View>
                <WebView
                    ref={WEBVIEW_REF}
                    source={{uri: 'http://www.baidu.com/'}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    automaticallyAdjustContentInsets={true}
                />
            </View>

        );
    }

    goBack() {
        this.refs[WEBVIEW_REF].goBack();
    }

    goForward() {
        this.refs[WEBVIEW_REF].goForward();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    title_text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    },
});

AppRegistry.registerComponent('WebViewDemo', () => WebViewDemo);