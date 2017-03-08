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
            jsonStr:{
                "title": "",
                "description": "",
                "movies": [
                    { "title": ""},
                    { "title": ""}
                ]
            },
        };
    }

    getMoviesFromApiAsync() {       //Http异步请求
        fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.resolveJson(responseJson);
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    resolveJson(responseJson) {
        this.setState({
            jsonStr:responseJson,
            title: responseJson.movies[0].title, year: responseJson.movies[0].releaseYear
        });
    }

    render() {                  //onCreate
        this.getMoviesFromApiAsync();           //每次创建的时候自动加载
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="rgb(33, 222, 155)"
                    activeOpacity={0.5}
                    style={{ borderRadius: 8,padding: 8,marginTop:5,backgroundColor:"#0588fe"}}
                    onPress={this.getMoviesFromApiAsync.bind(this)}>
                    <Text style={{color: '#F5FCFF',fontSize:20}}>刷新</Text>
                </TouchableHighlight>
                <Text>title：{this.state.title}</Text>
                <Text>releaseYear：{this.state.year}</Text>
                <Text>test：{this.state.jsonStr.movies[1].title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 10,
        backgroundColor: '#ffffff',
    },
});
// AppRegistry.registerComponent('ComHttp', () => ComHttp);