import React from 'react';
import { Text, View,Button,props } from 'react-native';

const Child_Method = (props) => (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <Text>Child_Method</Text>
        <Button onPress={props.greetHandler}
        title="Click Me"
        />
            {/*above will also work in case of passing a method from parent to child
 // Arrow will work here while passing args from child to parent
        <Button onPress={()=>props.greethandler('child')}
        title="Click Me"/>
// not working  */}
    </View>
);

export default Child_Method;

