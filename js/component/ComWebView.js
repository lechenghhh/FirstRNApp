/*
 * http://www.tuicool.com/articles/uQfiumm
 * */
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
        this.state = {
            getIntent: '',
        }
    }

    componentDidMount() {           //获取上个界面的传值
        this.setState({
            getIntent: this.props.intentNews,
        });
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
                      }}>{' X 关闭'}</Text>
                <WebView
                    ref={WEBVIEW_REF}
                    style={{width: width, height: height - 20, backgroundColor: 'gray'}}
                    source={{uri: this.state.getIntent, method: 'GET'}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    automaticallyAdjustContentInsets={true}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.ViewForTextStyle}>
                        <Text style={{
                            color: "#ffffff", padding: 2, fontSize: 24, flex: 1, justifyContent: 'center',
                        }}
                              onPress={() => {
                                  this.refs[WEBVIEW_REF].goBack();
                              }}>{' <-'}</Text>
                    </View>
                    <View style={styles.ViewForTextStyle}>
                        <Text style={{
                            color: "#ffffff", padding: 2, fontSize: 24, flex: 1, justifyContent: 'center',
                        }}
                              onPress={() => {
                                  this.refs[WEBVIEW_REF].goForward();
                                  {/*this.refs[WEBVIEW_REF].*/
                                  }
                              }}>{' ->'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ViewForTextStyle: {
        flex: 1,
        height: 32,
        backgroundColor: '#0CBEF4',
        alignItems: 'center',
        justifyContent: 'center',
    }
});