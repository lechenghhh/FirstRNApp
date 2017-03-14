/**
 * Created by 乐城 on 2017/3/13.
 * http://www.jianshu.com/p/b7788c3d106e
 * https://www.npmjs.com/pinstall react-native-scrollable-tab-view --saveackage/react-native-scrollable-tab-view
 * Run npm install react-native-scrollable-tab-view --save//
 * npm i react-native-scrollable-tab-view --save //应该是这个才对
 *
 var ScrollableTabView = require('react-native-scrollable-tab-view');
 var App = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
});*/
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text,
} from 'react-native';
import ComA from '../component/ComA'
import ComB from '../component/ComC'
import ComNews from '../component/ComNews'
import ScrollableTabView, {DURATION} from 'react-native-scrollable-tab-view'


export default class TableView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollableTabView
                tabBarActiveTextColor="#111111"//文字颜色
                tabBarInactiveTextColor="#999"//未被选中的文字颜色
                tabBarUnderlineColor='#FF0000'
                tabBarPosition="overlayBottom"
                onChangeTab={(obj) => {
                    console.log('index:' + obj.i);
                }
                }>
                <ComA tabLabel="第一"/>
                {/*<ComB tabLabel="第二"/>*/}
                {/*<ComNews tabLabel="新闻"/>*/}
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
});