/**
 * Created by 乐城 on 2017/3/9.
 */
import React from 'react';
import {
    View,
    Navigator,
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast'//自定义简单toast，记得导包

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.welcome}>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComNews'
                        })
                    }
                }}>ComNews</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComA'
                        })
                    }
                }}>ComA</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComB'
                        })
                    }
                }}>ComB</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComC'
                        })
                    }
                }}>ComC</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComLogin'
                        })
                    }
                }}>ComLogin</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComHttp'
                        })
                    }
                }}>ComHttp</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'ComListView'
                        })
                    }
                }}>ComListView</Text>
                <Text style={styles.Text}
                      onPress={()=>{
                    const{navigator} = this.props;
                    if (navigator){
                        navigator.push({
                            name:'FetchG'
                        })
                    }
                }}>FetchG</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#056bd4',
        color: '#F5FCFF',
        padding: 4,
    },
    Text:{
        padding:10,
        color:'#ddd',
        marginTop:5,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex:1,
    }
});
