/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

export default class ComHttp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            year: "",
            // jsonStr: {
            //     "title": "",
            //     "description": "",
            //     "movies": [
            //         {"title": ""},
            //         {"title": ""}
            //     ]
            // },
            jsonStr: '',
        };
    }

    componentDidMount() {
        this.getMoviesFromApiAsync();           //每次创建的时候自动加载1次
    }

    getMoviesFromApiAsync() {       //Http异步请求
        fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    jsonStr: JSON.stringify(responseJson),//json转化成字符串      JSON.parse(jsonstr)//json=>str
                    title: responseJson.movies[0].title, year: responseJson.movies[0].releaseYear
                });
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {                  //onCreate
        // this.getMoviesFromApiAsync();           //每次创建的时候自动加载
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',}}>
                    <Text style={{backgroundColor:'#F43E06',flex:1,color:"#ffffff",padding:2,}}
                          onPress={()=>{
                        const{navigator} = this.props;
                        if (navigator){
                            navigator.pop();
                        }
                    }}>{' <- 返回首页'}</Text>
                </View>
                <TouchableHighlight
                    underlayColor="rgb(33, 222, 155)"
                    activeOpacity={0.5}
                    style={{ borderRadius: 8,padding: 8,marginTop:5,backgroundColor:"#0588fe"}}
                    onPress={this.getMoviesFromApiAsync.bind(this)}>
                    <Text style={{color: '#F5FCFF',fontSize:20}}>刷新</Text>
                </TouchableHighlight>
                <Text>title：{this.state.title}</Text>
                <Text>releaseYear：{this.state.year}</Text>
                <Text>返回的字符串是：{this.state.jsonStr}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});
// AppRegistry.registerComponent('ComHttp', () => ComHttp);