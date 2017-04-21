/**
 * adb shell input keyevent 82   2017/3/9.
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
    ListView,

} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast'//自定义简单toast，记得导包

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),                             //list数据源2
            strArr: new Array('ComA', 'ComB', 'ComC', 'ComDParent','ComHttp',
                'ComLifeCycle', 'ComListView', 'ComLogin', 'ComNews','ComWebView',
                'Splash', 'ModalDemo', 'FetchG', 'TableView','TabNavi',
                '','','','','',),
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.state.strArr)
        })
    }

    render() {
        return (
            <View style={styles.welcome}>
                <Text>HelloWorld!</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Text style={styles.Text}
                              onPress={() => {
                                  const {navigator} = this.props;
                                  if (navigator) {
                                      navigator.push({
                                          name: rowData,
                                      })
                                  }
                              }}>{rowData}</Text>}/>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#F5FCFF',
        flex: 1,
        backgroundColor: '#d3d4bd',
        padding: 4,
    },
    Text: {
        padding: 10,
        backgroundColor: '#056bd4',
        color: '#ddd',
        marginTop: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex:1,
    }
});
