/**
 * Created by 乐城 on 2017/4/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    DeviceEventEmitter,
    Alert,
    ListView,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),                             //list数据源2
        };
        this._genRows();
    }

    _genRows() {
        var _this = this;
        var res2 = '';
        var arr2 = new Array('');
        AsyncStorage.getItem('history', function (errs, result) {//读取方法
            if (!errs) {                        //TODO:错误处理
                try {
                    arr2 = result.split(",");
                } catch (errs) {
                    console.log('读取失败');
                }
                console.log('arr2[1] : ' + arr2[1]);
                _this.setState({
                    dataSource: _this.state.dataSource.cloneWithRows(arr2),
                })
            }
            else {
                console.log('读取失败');
                _this.setState({
                    dataSource: _this.state.dataSource.cloneWithRows(arr2),
                })
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1,}}>
                <View style={{flexDirection: 'row',}}>
                    <Text style={{backgroundColor: '#F43E06', flex: 1, color: "#ffffff", padding: 6,}}
                          onPress={() => {
                              const {navigator} = this.props;
                              if (navigator) {
                                  navigator.pop();
                              }
                          }}>{' <- 返回'}</Text>
                </View>
                <Text style={styles.instructions}>浏览历史</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Text style={styles.welcome}
                              onPress={() => {
                                  DeviceEventEmitter.emit('userNameDidChange', rowData);
                              }}>{rowData}</Text>}/>
                <Text style={styles.welcome}
                      onPress={() => {
                          AsyncStorage.removeItem('history');
                          this._genRows();
                      }}>清空记录</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        backgroundColor: '#e0e1d9',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        backgroundColor: '#8892d4',
        fontSize: 22,
        textAlign: 'center',
        color: '#f2f4f4',
        marginBottom: 5,
    },
});