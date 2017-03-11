/**
 * Created by 乐城 on 2017/3/7.
 */
/*此组件用于测试布局*/
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';
import ComB from './ComB'

export default class ComListView extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
    }

    _genRows() {
        const dataBlob = [];
        for (let i = 0; i < 30; i++) {
            dataBlob.push("aa" + i);
        }
        return dataBlob;
    }

    render() {
        return (
            <View>
                <View style={{flexDirection:'row',}}>
                    <Text style={{backgroundColor:'#F43E06',flex:1,color:"#ffffff",padding:2,}}
                          onPress={()=>{
                        const{navigator} = this.props;
                        if (navigator){
                            navigator.pop();
                        }
                    }}>网易新闻 - </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                <Text>{rowData}</Text>}/>
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