import React, { Component } from 'react';
import { View, Text, props, Image, StyleSheet, RefreshControl } from 'react-native';

const ReactFlat_Card = (props) => {
    // console.warn(props.avatar)
    // console.warn(props.email)
    return (
        <View style={styles.container}>
            <Image
                onLoad={() => {
                }}
                //onLoadStart={(e) => this.setState({loading: true})}
                style={styles.img}
                source={{ uri: props.avatar }}
            />
            <Text style={styles.txt}>{props.email}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "pink",
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center"
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: -13,
        marginBottom: 10,
        marginLeft: -5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 15,
    },
    txt: {
        fontSize: 15,
        padding: 10

    }
})
export default ReactFlat_Card