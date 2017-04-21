/**
 * Created by 乐城 on 2017/4/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    ListView,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Collect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hello: '',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), //list数据源2
            strArr: new Array('收藏', 'ComB', 'ComC', 'ComDParent', 'ComHttp',
                'ComLifeCycle', 'ComListView',),  }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.state.strArr)
        })
    }

    render() {
        return (
            <View style={{flex: 1,}}>
                <View style={{flexDirection: 'row',}}>
                    <Text style={{backgroundColor: '#F43E06', flex: 1, color: "#ffffff", padding: 2,}}
                          onPress={() => {
                              const {navigator} = this.props;
                              if (navigator) {
                                  navigator.pop();
                              }
                          }}>{' <- 返回'}</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Text style={styles.welcome}>{rowData}</Text>}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        backgroundColor: '#8892d4',
        fontSize: 22,
        textAlign: 'center',
        color: '#f4003c',
        marginBottom: 5,
    },
});