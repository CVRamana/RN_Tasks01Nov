import React from 'react';
import { View,Text,StyleSheet,props,ActivityIndicator } from 'react-native';

const Activty_child=(props) => {
    console.warn("in child")
    return (
       (props.isLoading) && <View style={styles.child}>
        <Text> Activity Child</Text>
        <Text>{props.name}</Text>
        <Text>{String(props.isLoading)}</Text>
        <ActivityIndicator/>
    </View>
    )
};

export default Activty_child;
const styles=StyleSheet.create({
    child:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"red",
       // height:50
    }
})