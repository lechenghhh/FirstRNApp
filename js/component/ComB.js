/**
 * Created by 乐城 on 2017/3/6.
 */
//改变当前控件的属性


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

export default class ComB extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            position: 1,
            size: 80,
            et1: '',
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{width: this.state.size, height: this.state.size, backgroundColor: '#f46201'}}>
                    数值{this.state.position}
                </Text>
                <Text style={styles.instructions} onPress={() => {
                    this.setState({
                        size: this.state.size - 10,
                        position: this.state.position + 1,
                    })
                }}>变小</Text>
                <Text style={styles.instructions } onPress={() => {
                    this.setState({
                        size: this.state.size + 10,
                        position: this.state.position + 1,
                    })
                }}>变大</Text>
                <TextInput onChangeText={(et1) => this.setState({et1})}
                           value={this.state.et1}/>
                <Text onPress={() => {
                    const {navigator} = this.props;
                    if (navigator) {
                        navigator.push({
                            name: 'ComC',
                            params: {
                                intentA: this.state.et1,
                            },
                        })
                    }
                }}>跳转按钮，与上面无关</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    instructions: {
        backgroundColor: '#279c41',
        fontSize: 22,
        textAlign: 'center',
        color: '#f4f4f0',
        padding: 5,
        marginBottom: 5,

    },
});