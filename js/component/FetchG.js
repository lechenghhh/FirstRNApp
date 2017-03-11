import React, {Component} from 'react';
//列表案例
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    Image,
    ListView,
} from 'react-native';
Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class FetchG extends Component {

    /**
     * 初始化数据
     */
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((row1, row2) => row1 !== row2)
            }),
            load: false
        }
    }

    /**
     * 渲染界面
     */
    render() {
        /**
         * 因为数据时异步加载， 用load判断是否正在加载 如果加载完毕重新刷新界面改变load值
         */
        if (!this.state.load) {
            return <Text>加载中...</Text>
        }

        return (this.renderView(this.state.dataSource))
    }


    renderView() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}/>
        )

    }

    /**
     * 重写renderRow
     */
    renderRow(rowData) {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: rowData.url }}
                       style={{ width: width, height: height / 2, marginTop: 5 }}/>
            </View>
        )
    }

    /**
     * 加载耗时操作
     */
    componentDidMount() {
        this.getDataFromFetch();
    }

    getDataFromFetch() {
        fetch('http://gank.io/api/search/query/listview/category/福利/count/10/page/1')//请求地址
            .then((response) => response.json())//取数据
            .then((responseText) => {//处理数据
                //通过setState()方法重新渲染界面
                this.setState({
                    //改变加载ListView
                    load: true,
                    //设置数据源刷新界面
                    dataSource: this.state.dataSource.cloneWithRows(responseText.results),
                })
            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }
}
module.exports = FetchG