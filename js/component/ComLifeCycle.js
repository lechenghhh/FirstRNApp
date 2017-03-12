/**
 * Created by Cheng on 2017/3/5.
 */
import React, {Component} from 'react';             //ES6方式导入的包
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class ComLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    render() {
        return <View>
            <Text style={{backgroundColor:'#F43E06',color:"#ffffff",padding:2,}}
                  onPress={()=>{
                        const{navigator} = this.props;
                        if (navigator){
                            navigator.pop();
                        }
                    }}>{' <- 返回首页'}</Text>
            <Text style={{fontSize:32,backgroundColor:'gray'}}
                  onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                  }}>点击累加器</Text>
            <Text style={{fontSize:20,backgroundColor:'white'}}>数字是：{this.state.count}(单位：个)</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1f82bb',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
    },
});
