import React from 'react';
import { Text, View,Button,props } from 'react-native';

const Child_Method = (props) => (
    <View >
        <Text>Child_Method</Text>
        <Button onPress={props.greetHandler}
        title="Click Me"
        />
            {/* above will also work in case of passing a method from parent to child
 // Arrow will work here while passing args from child to parent */}
        <Button onPress={()=>props.greetfromChild('child')}
        title="Click from child"/>
 
    </View>
);

export default Child_Method;

