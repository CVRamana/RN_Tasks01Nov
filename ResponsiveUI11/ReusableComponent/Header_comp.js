import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Constants/styles'


const Header_comp = (props) => (
    <View style={styles.child1}>

        <Image
            style={styles.head_img}
            source={props.url_pro}
        />

        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,

        }}>
            <Text style={{ fontSize: 20 }} >{props.name}</Text>
            <Text style={{ color: "white" }}>Level {props.level}</Text>
        </View>

    </View>
);

export default Header_comp;
