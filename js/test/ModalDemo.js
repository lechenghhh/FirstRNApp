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
    Modal,
    Switch,
} from 'react-native';

export default class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationType: false,
            modalVisible: false,
            transparent: false,

        };
        this._toggleTransparent = this.toggleTransparent.bind(this);
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _setAnimationType(type) {
        this.setState({animationType: type});
    }

    toggleTransparent() {
        this.setState({transparent: !this.state.transparent});
    }

    render() {
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        const innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: 'red', padding: 20}
            : null

        return (
            <View style={{flex: 1, backgroundColor: '#333333'}}>
                <Text style={{backgroundColor: '#F43E06', color: "#ffffff", padding: 2, fontSize: 18,}}
                      onPress={() => {
                          const {navigator} = this.props;
                          if (navigator) {
                              navigator.pop();//退出
                          }
                      }}>{' ＜- 返回'}</Text>
                <Text style={{color: 'white'}}>Modal实例演示</Text>
                <Modal
                    animated={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this._setModalVisible(false)
                    }}
                >
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text>Modal视图被显示:
                                {this.state.animationType === false ? '没有' : '有'}
                                动画效果.</Text>
                            <Text
                                onPress={this._setModalVisible.bind(this, false)}
                                style={styles.modalText}>
                                关闭Modal
                            </Text>
                        </View>
                    </View>
                </Modal>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>动画类型</Text>
                    <Text onPress={this._setAnimationType.bind(this, false)}
                          style={this.state.animationType === false ? {backgroundColor: 'red'} : {}}>
                        无动画
                    </Text>
                    <Text onPress={this._setAnimationType.bind(this, true)}
                          style={this.state.animationType === true ? {backgroundColor: 'yellow'} : {}}>
                        滑动效果
                    </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>透明</Text>
                    <Switch value={this.state.transparent} onValueChange={this._toggleTransparent}/>
                </View>

                <Text onPress={this._setModalVisible.bind(this, true)}>
                    显示Modal
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
        backgroundColor: '#aaaaaa',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        backgroundColor: '#aaaaaa',
        flex: 1,
        fontWeight: 'bold',
    },
    Text: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        backgroundColor: '#aaaaaa',
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    TextText: {
        fontSize: 18,
        backgroundColor: '#aaaaaa',
        margin: 5,
        textAlign: 'center',
    },
    modalText: {
        marginTop: 10,
        backgroundColor: '#aaaaaa',
    },
});

AppRegistry.registerComponent('ModalDemo', () => ModalDemo);