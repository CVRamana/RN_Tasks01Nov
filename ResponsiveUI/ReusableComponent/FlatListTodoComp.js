import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
//import {  } from 'react-native-gesture-handler';

class FlatListTodoComp extends Component {
    constructor(props) {
        super(props);
        this.state={
            ischecked:false
        }
    }
   

    render() {
        return (
            <View style={styles.supreme}>
                <View style={styles.parent}>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.id}</Text>
                   {/* // <Text> {JSON.stringify(this.props.object11)}</Text> */}
                </View>
                <View style={styles.bttnContainer}>
                    <TouchableOpacity
                    onPress={()=>{
                        console.warn(this.state.ischecked)
                        this.setState({
                        ischecked:!this.state.ischecked
                    })}} 
                    >
                        <Image
                            style={styles.checkImg}
                            source={this.state.ischecked ? require('../Assets/check.png') : require('../Assets/uncheck.png')}
                        />
                    </TouchableOpacity>
                    <Button
                        title="DELETE"
                        onPress={()=>this.props.deletTask(this.props.id)}
                    />
                </View>
            </View>
        );
    }
}

export default FlatListTodoComp;
const styles = StyleSheet.create({
    parent: {
        width: 280,
        height: 100,
        justifyContent:"center",
        //alignItems: 'center',
       // backgroundColor:"yellow"
    },
    supreme: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink",
        flexDirection: 'row',
        margin: 10,
        borderRadius: 20
    },
    bttnContainer: {
       // backgroundColor: "lightgrey",
        justifyContent:"center",
        alignItems:"center"
    },
    checkImg: {
        height: 40,
        width: 40, 
        //backgroundColor: "red",
        borderRadius:20
    }

})