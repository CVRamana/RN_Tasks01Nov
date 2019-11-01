import React, { Component } from 'react';
import {
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native'

class ReactFlat_input extends Component {

    render() {
        return (
            <View style={styles.head}>
                <TextInput style={styles.input} 
                value={this.props.seachKey} 
                onChangeText={(val)=> this.props.search(val)}/>
                <TouchableOpacity style={styles.bttn}
                    onPress={()=>this.props.handleSearch()}>
                    <Text style={{ fontSize: 40, color: "green" }}>Go</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ReactFlat_input;

const styles = StyleSheet.create({
    head: {
        paddingTop: 50,
        backgroundColor: "orange",
        alignItems: "center",
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: "row"
    },
    input: {
        backgroundColor: "white",
        width: 300,
        height: 50,
        borderRadius: 20,
        paddingLeft: 20

    },
    bttn: {
        backgroundColor: "pink",
        borderRadius: 10,
        marginLeft: 10,

    }

})

