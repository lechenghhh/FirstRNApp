import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text,
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
                <Text style={{backgroundColor: '#F43E06', color: "#ffffff", padding: 2, fontSize: 18,}}
                      onPress={() => {
                          const {navigator} = this.props;
                          if (navigator) {
                              navigator.pop();//退出
                          }
                      }}>{' ＜- 返回'}</Text>
                <WebView
                    style={{width: width, height: height - 20, backgroundColor: 'gray'}}
                    source={{uri: url, method: 'GET'}}
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