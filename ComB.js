/**
 * Created by 乐城 on 2017/3/6.
 */
//改变当前控件的属性


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Com_b extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            position: 1,
            size: 80
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{width:this.state.size,height:this.state.size,backgroundColor:'#f46201'}}>
                    数值{this.state.position}
                </Text>
                <Text style={styles.instructions} onPress={()=>{
                    this.setState({
                        size:this.state.size-10,
                        position:this.state.position+1,
                    })
                }}>变小</Text>
                <Text style={styles.instructions } onPress={()=>{
                    this.setState({
                        size:this.state.size+10,
                        position:this.state.position+1,
                    })
                }}>变大</Text>


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