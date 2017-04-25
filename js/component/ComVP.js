/**
 npm install react-native-viewpager --save

 http://www.lcode.org/react-native-viewpager-race/
 * Created by 乐城 on 2017/3/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text,
} from 'react-native';
var ViewPager = require('react-native-viewpager');
// import ScrollableTabView, {DURATION} from 'react-native-scrollable-tab-view'
export default class ComVP extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
    }

    _genRows() {
        const dataBlob = [];
        for (let i = 0; i < 5; i++) {
            dataBlob.push("aa" + i);
        }
        return dataBlob;
    }

    render() {
        return
        <ViewPager
            dataSource={this.state.dataSource}
            renderPage={this._renderPage}
            animation={(animatedValue, toValue, gestureState) => {
                // Use the horizontal velocity of the swipe gesture
                // to affect the length of the transition so the faster you swipe
                // the faster the pages will transition
                var velocity = Math.abs(gestureState.vx);
                var baseDuration = 300;
                var duration = (velocity > 1) ? 1 / velocity * baseDuration : baseDuration;

                return Animated.timing(animatedValue,
                    {
                        toValue: toValue,
                        duration: duration,
                        easing: Easing.out(Easing.exp)
                    });
            }}
        />
    }
}
