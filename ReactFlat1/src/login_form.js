import React, { Component } from 'react';
import {
    TextInput, Text, Image, Button, StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'
//import Details from '../src/Details'
import ImagePicker from 'react-native-image-crop-picker';
class login_form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.navigation.state.params.username,
            password: this.props.navigation.state.params.password,
            source: ""
        };
    };
    static navigationOptions = {
        title: 'Login',
        headerBackTitle: "Go Back"
    };
    render() {
        const { params } = this.props.navigation.state;
        const username = params ? params.name : null;
        const password = params ? params.password : null;
        //console.warn(username)
        //console.warn(password)
        //console.warn(this.state.username)
        return (
            <View style={styles.parent}>
                <TouchableOpacity
                    style={styles.img}
                    onPress={() => {
                        ImagePicker.openPicker({
                            height: 40,
                            width: 50,
                            cropping: true
                        }).then(image => {
                            console.log(image);
                            this.setState({
                                source: image.path
                            })
                        });
                    }}>

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.source }} />
                    <Text>Choose Photo</Text>
                </TouchableOpacity>
                <TextInput style={styles.text}

                    placeholder="name"
                    returnKeyType={"next"}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    value={this.state.username}
                    onChangeText={(text)=> this.setState({ username: text })} />

                <TextInput style={styles.text}
                    ref={(input) => { this.secondTextInput = input; }}
                    placeholder="secondTextInput"
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })} />

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={styles.byyn}
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                username: this.state.username,
                                password: this.state.password
                            })
                        }} >

                        <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.byyn}
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                username: this.state.username,
                                password: this.state.password
                            })
                        }} >
                        <Text style={{ fontSize: 20, color: "white" }}>Edit</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.byyn}
                        onPress={() => {
                            this.props.navigation.state.params.updateValues(this.state.username, this.state.password, this.state.source)
                            this.props.navigation.navigate('Home', {
                                userName: this.state.username,
                                Password: this.state.password
                            })
                        }} >
                        <Text style={{ fontSize: 20, color: "white" }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default login_form;
const styles = StyleSheet.create({
    parent: {
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: "yellow",
        flex: 1
    },
    text: {
        width: 250,
        height: 40,
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 20,
        paddingLeft: 14,
    },
    img: {
        width: 150,
        height: 150,
        backgroundColor: "red",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      //  elevation: 5,
    },
    byyn: {
        backgroundColor: "blue",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "green",
        width: 100,
        marginLeft: 20,
    }
})