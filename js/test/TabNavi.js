/*
 <View style={[styles.flex, styles.center, {backgroundColor: '#ffff0044'}]}>
 <Text style={{fontSize: 30}}>首页</Text>
 </View>
 <View style={[styles.flex, styles.center, {backgroundColor: '#ffff0044'}]}>
 <Text style={{fontSize: 30}}>设置</Text>
 </View>
 *  npm install react-native-tab-navigator --save */
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
    DeviceEventEmitter,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ComNews from '../component/ComNews'
import ComNewsB from '../component/ComNewsB'
import ComNewsC from '../component/ComNewsC'
import ComWebView from '../component/ComWebView'

export default class HomeUI extends Component {
    constructor(props) {
        super(props);           //这一句不能省略，照抄即可
        this.state = {
            selectedTab: 'war', //默认选中home
        }
    }

    componentDidMount() {    //添加DeviceEventEmitter，接收来自ComNews传递过来的消息
        this.subscription = DeviceEventEmitter.addListener('userNameDidChange', (msg) => {
            const {navigator} = this.props;
            if (navigator) {
                navigator.push({
                    name: 'ComWebView',
                    params: {
                        intentNews: msg,
                    },
                })
            }
        })
    }

    componentWillUnmount() {
        this.subscription.remove();         //移除DeviceEventEmitter
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={{height: 52}}
                renderScene={(route, nav) => {
                    let Component = route.component;
                    switch (route.name) {
                        case 'ComWebView':
                            return <ComWebView {...route.params} navigator={nav} title="ComWebView"/>
                    }
                }}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'war'}
                    title="军事" //Tab文字
                    renderIcon={() =>
                        <Image style={styles.img}
                               source={{uri: 'http://www.easyicon.net/api/resizeApi.php?id=1172135&size=96'} }/>}//默认图标
                    renderSelectedIcon={() =>
                        <Image style={styles.img}
                               source={{uri: 'http://www.easyicon.net/api/resizeApi.php?id=1171920&size=96'} }/>}//选中图标
                    badgeText="9+"//消息数目
                    onPress={() => this.setState({selectedTab: 'war'})}>
                    <ComNews navigatorPush={this.props.navigator}
                             passValue='我是父组件传给子组件的值'/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tech'}
                    title="教育"
                    renderIcon={() =>
                        <Image style={styles.img}
                               source={{uri: 'http://www.easyicon.net/api/resizeApi.php?id=1171940&size=96'}}/>}
                    renderSelectedIcon={() =>
                        <Image style={styles.img}
                               source={{uri: 'http://www.easyicon.net/api/resizeApi.php?id=1171920&size=96'}}/>}
                    onPress={() => this.setState({selectedTab: 'tech'})}>
                    <ComNewsB/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'sport'}
                    title="体育"
                    renderIcon={() =>
                        <Image style={styles.img}
                               source={{uri: 'http://www.easyicon.net/api/resizeApi.php?id=1172057&size=96'}}/>}
                    renderSelectedIcon={() =>
                        <Image style={styles.img}
                               source={{uri: 'http://www.easyicon.net/api/resizeApi.php?id=1171920&size=96'}}/>}
                    onPress={() => this.setState({selectedTab: 'sport'})}>
                    <ComNewsC/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 32,
        height: 24,
    },
});