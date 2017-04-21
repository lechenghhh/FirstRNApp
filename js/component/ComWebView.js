/*
 * http://www.tuicool.com/articles/uQfiumm
 * */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    AsyncStorage,
    Dimensions,
    Text,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

const {width, height} = Dimensions.get('window');

export default class ComWebView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // getIntent: 'http://m.hao123.com',
        }
    }

    static defaultProps = {
        intentNews: 'http://m.hao123.com'
    }

    saveCollect(data) {
        var result2 = '';
        var _this = this;
        AsyncStorage.getItem('collect', function (errs, result) {//读取方法
            if (!errs) {   //TODO:错误处理
                result2 = result;
                console.log('result2 = ' + result2);
                AsyncStorage.setItem('collect', result2 + ',' + data, function (errs) {//存储方法
                    if (errs)       //TODO:错误处理
                        _this.refs.toast.show('收藏失败');
                    else
                        _this.refs.toast.show('收藏成功!\n' + data);
                });
            }
            else
                console.log('读取失败');
        });
    }

    render() {
        return (
            <View style={{flex: 1,}}>
                <Text style={{backgroundColor: '#F43E06', color: "#ffffff", padding: 2, fontSize: 18,}}
                      onPress={() => {
                          const {navigator} = this.props;
                          if (navigator) {
                              navigator.pop();//退出
                          }
                      }}>{' X 关闭'}</Text>
                <WebView
                    ref={'WEBVIEW_REF'}
                    style={{width: width, height: height - 20, backgroundColor: 'gray'}}
                    source={{uri: this.props.intentNews, method: 'GET'}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    automaticallyAdjustContentInsets={true}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.ViewForTextStyle}>
                        <Text style={styles.textStyle}
                              onPress={() => {
                                  this.refs['WEBVIEW_REF'].goBack();
                              }}>{'<-'}</Text>
                    </View>
                    <View style={styles.ViewForTextStyle}>
                        <Text style={styles.textStyle}
                              onPress={() => {
                                  this.refs['WEBVIEW_REF'].goForward();
                              }}>{'->'}</Text>
                    </View>
                    <View style={styles.ViewForTextStyle}>
                        <Text style={styles.textStyle}
                              onPress={() => {
                                  this.saveCollect(this.props.intentNews);
                              }}>{'★'}</Text>
                    </View>
                </View>
                <Toast ref="toast" style={{
                    backgroundColor: '#f4485f', borderRadius: 10,
                    marginBottom: 50,
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: "#ffffff", paddingLeft: 32, paddingRight: 32, fontSize: 24, flex: 1, justifyContent: 'center',
    },
    ViewForTextStyle: {
        flex: 1,
        height: 32,
        backgroundColor: '#0CBEF4',
        alignItems: 'center',
        justifyContent: 'center',
    }
});