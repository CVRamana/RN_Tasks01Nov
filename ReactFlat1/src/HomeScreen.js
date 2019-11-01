import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from '../src/Details'
import Camera_Perm from '../src/Camera_Perm'
import Image_multi from '../src/Image_multi'
import Button_Comp from '../src/Button_Comp'
import ReactFlat11 from '../src/ReactFlat11'
import ReacTTest from '../src/ReacTTest'
import Post_API from '../src/Post_API'
import Screen_Assignment999 from '../src/Screen_Assignment999'
import Screen_Assign3 from '../src/Screen_Assign3'


//import ReactFlat11 from '../../../ReactNativePractice/src/ReactFlat11'


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

                     <Button_Comp
                        title="API Page"
                        call={() => this.props.navigation.navigate('Api_page')}
                    />
                     <Button_Comp
                        title="Axios_Api"
                        call={() => this.props.navigation.navigate('Axios_Api')}
                    />
                     <Button_Comp
                        title="Post_Api"
                        call={() => this.props.navigation.navigate('Post_Api')}
                    />
                     <Button_Comp
                        title="Screen1"
                        call={() => this.props.navigation.navigate('Screen1')}
                    />
                    <Button_Comp
                        title="Screen2"
                        call={() => this.props.navigation.navigate('Screen2')}
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
        Image_Multiple: Image_multi,
        Api_page:ReactFlat11,
        Axios_Api:ReacTTest,
        Post_Api:Post_API,
        Screen1:Screen_Assignment999,
        Screen2:Screen_Assign3
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