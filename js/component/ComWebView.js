import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const url = "http://www.58.com";
export default class ComWebView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'gray'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 20,
    },
});  