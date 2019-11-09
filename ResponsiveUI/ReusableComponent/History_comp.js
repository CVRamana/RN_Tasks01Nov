import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Constants/styles';

const History_comp = (props) => (
    <View style={[styles.history_content, props.extraStyle]}>
        <View style={{paddingRight:125,
        //backgroundColor:"pink"
        }}> 
            <Text>Add Review</Text>
            <Text>13/10/2020</Text>
            </View>
            <View>
            <Text style={{marginTop:8,color:"red"}}>40000000 VND</Text>
            </View>
    </View>
);

export default History_comp;
