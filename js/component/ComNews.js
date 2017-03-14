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
    AlertIOS,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ComA from '../component/ComA'
import ComB from '../component/ComC'

export default class ComNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),                             //list数据源2
            type: 'war',
            jsonStr: '',
            str2: new Array('war', 'tech', 'sport'),
            // , 'edu', 'ent', 'money', 'travel', 'gupiao', 'lady'),
            i2: 2,
        };
    }

    componentDidMount() {
        this.getMoviesFromApiAsync();           //每次创建的时候自动加载1次
    }

    // componentDidUpdate() {
    //     this.getMoviesFromApiAsync();           //每次更新视图的时候自动加载
    // }

    getMoviesFromApiAsync() {       //Http异步请求
        fetch('http://wangyi.butterfly.mopaasapp.com/news/api?type='
            + this.state.type
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
                <Image style={{flex: 1,}}
                       source={{uri: 'http://appserver.m.bing.net/BackgroundImageService/TodayImageService.svc/GetTodayImage?dateOffset=0&urlEncodeHeaders=true&osName=windowsPhone&osVersion=8.10&orientation=480x800&deviceName=WP8&mkt=en-US'}}>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{backgroundColor: '#F43E06', flex: 1, color: "#ffffff", padding: 5,}}
                              onPress={() => {
                                  const {navigator} = this.props;
                                  if (navigator) {
                                      navigator.push({
                                          name: 'Main',
                                      })
                                  }
                              }}>网易新闻 - {this.state.type}</Text>
                    </View>
                    <ScrollableTabView
                        tabBarBackgroundColor="#CCCCCC"
                        tabBarActiveTextColor="#3d8afe"//文字颜色
                        tabBarInactiveTextColor="#999"//未被选中的文字颜色
                        tabBarUnderlineColor='#FF0000'
                        tabBarPosition="bottom"
                        onChangeTab={(obj) => {
                            this.setState({
                                type: this.state.str2[obj.i],
                            });
                            console.log(obj.i + "----type-" + this.state.type);
                        }}>
                        <ScrollView tabLabel="战争"
                                    contentContainerStyle={styles.contentContainer}>
                            <ListView
                                style={{margin: 4}}
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) =>
                                    <View style={{flexDirection: 'row', margin: 2, padding: 4,}}>
                                        <Image style={{height: 60, width: 40}}
                                               source={{uri: rowData.imgurl}}>
                                        </Image>
                                        <View style={{
                                            backgroundColor: '#1b1d1d',
                                            flex: 1,
                                            marginLeft: 6,
                                            justifyContent: 'space-around'
                                        }}>
                                            <Text style={{color: "#cef4e3", flexWrap: 'wrap'}} onPress={() => {
                                                this.refs.toast.show('文章内容：' + rowData.docurl);
                                                const {navigator} = this.props;
                                                if (navigator) {
                                                    navigator.push({
                                                        name: 'ComWebView',
                                                        params: {
                                                            intentNews: rowData.docurl,
                                                        },
                                                    })
                                                }
                                            }}>{rowData.title}</Text>
                                            <Text style={{color: "#82a1a8"}}>{rowData.time}</Text>
                                        </View>
                                    </View>
                                }/>
                            {/*<Text>请求结果是：{this.state.jsonStr}</Text>*/}
                        </ScrollView>
                        <ScrollView tabLabel="教育"
                                    contentContainerStyle={styles.contentContainer}>
                            <ListView
                                style={{margin: 4}}
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) =>
                                    <View style={{flexDirection: 'row', margin: 2, padding: 4,}}>
                                        <Image style={{height: 60, width: 40}}
                                               source={{uri: rowData.imgurl}}>
                                        </Image>
                                        <View style={{
                                            backgroundColor: '#1b1d1d',
                                            flex: 1,
                                            marginLeft: 6,
                                            justifyContent: 'space-around'
                                        }}>
                                            <Text style={{color: "#cef4e3", flexWrap: 'wrap'}} onPress={() => {
                                                this.refs.toast.show('文章内容：' + rowData.docurl);
                                                const {navigator} = this.props;
                                                if (navigator) {
                                                    navigator.push({
                                                        name: 'ComWebView',
                                                        params: {
                                                            intentNews: rowData.docurl,
                                                        },
                                                    })
                                                }
                                            }}>{rowData.title}</Text>
                                            <Text style={{color: "#82a1a8"}}>{rowData.time}</Text>
                                        </View>
                                    </View>
                                }/>
                            {/*<Text>请求结果是：{this.state.jsonStr}</Text>*/}
                        </ScrollView>
                        <ScrollView tabLabel="体育"
                                    contentContainerStyle={styles.contentContainer}>
                            <ListView
                                style={{margin: 4}}
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) =>
                                    <View style={{flexDirection: 'row', margin: 2, padding: 4,}}>
                                        <Image style={{height: 60, width: 40}}
                                               source={{uri: rowData.imgurl}}>
                                        </Image>
                                        <View style={{
                                            backgroundColor: '#1b1d1d',
                                            flex: 1,
                                            marginLeft: 6,
                                            justifyContent: 'space-around'
                                        }}>
                                            <Text style={{color: "#cef4e3", flexWrap: 'wrap'}} onPress={() => {
                                                this.refs.toast.show('文章内容：' + rowData.docurl);
                                                const {navigator} = this.props;
                                                if (navigator) {
                                                    navigator.push({
                                                        name: 'ComWebView',
                                                        params: {
                                                            intentNews: rowData.docurl,
                                                        },
                                                    })
                                                }
                                            }}>{rowData.title}</Text>
                                            <Text style={{color: "#82a1a8"}}>{rowData.time}</Text>
                                        </View>
                                    </View>
                                }/>
                            {/*<Text>请求结果是：{this.state.jsonStr}</Text>*/}
                        </ScrollView>
                    </ScrollableTabView>
                    <View style={{flexDirection: 'row',}}>
                        <TouchableHighlight
                            style={styles.btn}
                            underlayColor="rgb(33, 222, 155)"
                            activeOpacity={0.5}
                            onPress={(
                                this.getMoviesFromApiAsync.bind(this)
                            )}>
                            <Text style={{color: '#F5FCFF', fontSize: 20}}>刷新</Text>
                        </TouchableHighlight>
                    </View>
                </Image>
                <Toast ref="toast" style={{backgroundColor: '#f4485f', borderRadius: 10}}/>
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
        height: 40,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 2,
        backgroundColor: "#3d8afe",

    }
});
// AppRegistry.registerComponent('ComHttp', () => ComHttp);