import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from '../src/Details'
import Camera_Perm from '../src/Camera_Perm'
import Image_multi from '../src/Image_multi'
import Button_Comp from '../src/Button_Comp'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.txt}>Home Screen</Text>

                <View style={styles.child_Container}>
                    <Button_Comp
                        title="Go to Detail"
                        call={() => this.props.navigation.navigate('Details')}
                    />
                    <Button_Comp
                        title="Camera"
                        call={() => this.props.navigation.navigate('Camera')}
                    />

                    <Button_Comp
                        title="Gallery"
                        call={() => this.props.navigation.navigate('Image_Multiple')}
                    />
                </View>

            </View>
        );
    }
}
const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: Details,
        Camera: Camera_Perm,
        Image_Multiple: Image_multi
    },
    {
        initialRouteName: "Home"
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
const styles = StyleSheet.create({
    Container: {
        backgroundColor: "grey",
        flex: 1,
        alignItems: "center"
    },
    txt: {
        fontSize: 20,
        fontWeight: "bold"
    },
    child_Container: {
        backgroundColor: "pink",
        margin: 20,
    }

})