/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*      api文档地址：
 *http://wangyi.butterfly.mopaasapp.com
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image,
    TextInput,
    TouchableHighlight,
} from 'react-native';


export default class ComNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),                             //list数据源2
            type: 'sport',
            jsonStr: '',
            str2: '',
        };
    }

    getMoviesFromApiAsync() {       //Http异步请求
        fetch('http://wangyi.butterfly.mopaasapp.com/news/api?type='
            + this.state.str2
            + '&page=1&limit=10')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    jsonStr: JSON.stringify(responseJson),//json转化成字符串 JSON.parse(jsonstr)//json=>str
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.list),
                });
                console.log(responseJson);
                console.log(this.state.jsonStr);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {                  //onReusme
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',}}>
                    <Text style={{backgroundColor:'#F43E06',flex:1,color:"#ffffff"}}>网易新闻</Text>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <ListView
                        style={{margin:4}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <View style={{flexDirection:'row',margin:4,padding: 2,}}>
                                <Image style={{height:60,width:40}}
                                        source={{uri:rowData.imgurl}}>
                                </Image>
                                <View style={{flex:1,backgroundColor:"#1b1d1d",margin:4,padding: 2,border:0.4}}>
                                    <Text style={{color:"#f4f4f0",fontsize:28}} onPress={()=>{
                                        ToastAndroid.LONG,rowData.title
                                    }}>{rowData.title}</Text>
                                    <Text style={{color:"#444444"}}>{rowData.time}</Text>
                                </View>
                            </View>
                        }/>
                    {/*<Text>请求结果是：{this.state.jsonStr}</Text>*/}
                </ScrollView>
                <View style={{flexDirection:'row',}}>
                    <TouchableHighlight
                        style={styles.btn}
                        underlayColor="rgb(33, 222, 155)"
                        activeOpacity={0.5}
                        onPress={(
                            this.getMoviesFromApiAsync.bind(this)
                        )}>
                        <Text style={{color: '#F5FCFF',fontSize:20}}>刷新</Text>
                    </TouchableHighlight>
                    <TextInput
                        style={{flex:1,height: 40, borderColor: '#279c41',borderWidth: 1,
                        borderRadius:4,marginLeft:12,marginRight:12}}
                        onChangeText={(str2) =>this.setState({str2})}
                        value={this.state.str2}/>
                    {/*<TouchableHighlight*/}
                    {/*style={styles.btn}*/}
                    {/*underlayColor="rgb(33, 222, 155)"*/}
                    {/*activeOpacity={0.5}*/}
                    {/*onPress={(*/}
                    {/*this.setState({*/}
                    {/*type:'war',*/}
                    {/*}),*/}
                    {/*this.getMoviesFromApiAsync.bind(this)*/}
                    {/*)}>*/}
                    {/*<Text style={{color: '#F5FCFF',fontSize:20}}>军事</Text>*/}
                    {/*</TouchableHighlight>*/}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    btn: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 2,
        marginTop: 5,
        backgroundColor: "#094ffe",

    }
});
// AppRegistry.registerComponent('ComHttp', () => ComHttp);