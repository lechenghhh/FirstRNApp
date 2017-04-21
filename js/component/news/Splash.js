/**
 * Created by 乐城 on 2017/4/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            content: '',
        })
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
                const {navigator} = this.props;
                if (navigator) {
                    navigator.push({
                        name: 'TabNavi',
                        params: {},
                    })
                }
            },
            2000
        );
    }

    componentWillUnmount() {                   //如果存在this.timer，则使用clearTimeout清空。
        this.timer && clearTimeout(this.timer);//如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={() => {
                      }}>欢迎来到新闻APP</Text>
                <Toast ref="toast" style={{backgroundColor: '#3d8afe', borderRadius: 10}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4003c',
    },
    welcome: {
        fontSize: 32,
        flex: 1,
        textAlign: 'center',
        paddingTop: 200,
        color: '#fff'
    },
});