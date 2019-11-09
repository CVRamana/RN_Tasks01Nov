import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Constants/styles';

const Bal_comp = (props) => (
    <View style={{flexDirection:"row",padding: 10,}}>
        {/* <Text>Bal_comp</Text> */}
        <View  style={{justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink",
        padding: 10,}}>
        <Text >Balance</Text>
        <Text style={{color:"#00886f",fontSize:17}}>476357654 VND</Text>
        </View>
        
        <View style={{justifyContent:"center",alignItems:"center",
        backgroundColor:"grey",
        padding: 10,}}>
        <Text >Balance Used</Text>
        <Text style={{color:"#00886f",fontSize:17}}>9693846984 VND</Text>
        </View>
    </View>
);

export default Bal_comp;
