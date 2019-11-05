import React, { Component } from 'react';
import {
    View,StyleSheet,
    FlatList,
} from 'react-native'
import ReactFlat_input from '../src/ReactFlat_input'
import ReactFlat_Card from '../src/ReactFlat_Card';
import axios from 'axios'
export default class ReactFlat11 extends Component {
    static navigationOptions = {
        title: 'Page fetch',
    };
    constructor(props) {
        super(props)
        this.state = {
            payload: [],
            seachKey: "",
            currentPage: 1,
            api: 'https://reqres.in/api/users?page=',
            refreshing: false
        };
    };
    componentDidMount() {
        axios.get("https://reqres.in/api/users?page=1")
            .then((response) => {
                this.setState({
                    payload: response.data.data
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    search = (val) => {
        this.setState({ seachKey: val })
    }
    handleSearch = () => {

    }

    onPageChange() {
      
        axios.get(this.state.api + this.state.currentPage)
            .then((response) => {
                this.setState({
                    payload: this.state.payload.concat(response.data.data)
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    handleRefresh() {
        this.setState({
            refreshing: true
        },
            () => {
                this.setState({
                    refreshing: false
                })
            }
        )
    }
    render() {
        return (
            <View>
                <ReactFlat_input
                    search={this.search}
                    seachKey={this.state.seachKey}
                    handleSearch={this.handleSearch}
                />
                <FlatList
                    onRefresh={() => { this.handleRefresh }}
                    refreshing={this.state.refreshing}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        
                        this.setState(() => {
                            return { currentPage: this.state.currentPage + 1 };
                        });
                        this.onPageChange()
                    }}
                    data={this.state.payload}
                    renderItem={
                        ({ item }) => <ReactFlat_Card
                            id={item.id}
                            email={item.email}
                            avatar={item.avatar}
                        />
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    txt: {
        fontSize: 50,
        color: "red"
    },
    flat: {
        height: 400,
    }
})

