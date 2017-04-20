/**
 * Created by 乐城 on 2017/3/6.
 */
//获取其他控件的数值的demo
//alert：
//http://www.cnblogs.com/liuShanPei1024/p/5783257.html

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import ComB from './ComB'
import Toast, {DURATION} from 'react-native-easy-toast'

export default class ComA extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            position: 1,
            position2: 10
        })
    }

    render() {
        return (
            <View >
                <View >
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{backgroundColor: '#F43E06', flex: 1, color: "#ffffff", padding: 2,}}
                              onPress={() => {
                                  const {navigator} = this.props;
                                  if (navigator) {
                                      navigator.pop();//退出
                                  }
                              }}>{' <- 返回首页'}</Text>
                    </View>
                    <ComB ref="reftest"/>
                    <Text style={styles.instructions}>
                        数值{this.state.position2}
                    </Text>
                    <Text style={styles.instructions } onPress={() => {
                        var position2 = this.refs.reftest.state.size;
                        this.setState({
                            position: this.state.position + 1,
                            position2: position2,
                        });
                        Alert.alert(
                            '标题', '内容content',
                            [{text: 'Ask me later', onPress: () => this.refs.toast.show('Ask me later')},
                                {text: 'Cancel', onPress: () => this.refs.toast.show('Cancel')},
                                {text: 'OK', onPress: () => this.refs.toast.show('OK')}]
                        )
                    }}>
                        按钮获取refs
                    </Text>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        backgroundColor: '#8892d4',
        fontSize: 22,
        textAlign: 'center',
        color: '#f4003c',
        marginBottom: 5,

    },
});