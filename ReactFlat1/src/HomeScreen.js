import React from 'react';
import { View, Text, StyleSheet,Image, ScrollView, Button } from 'react-native';
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
import Image_Picker from '../src/Image_Picker'
import login_form from '../src/login_form'
import { TouchableOpacity } from 'react-native-gesture-handler';
//import ReactFlat11 from '../../../ReactNativePractice/src/ReactFlat11'

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state={
            username:'USN from Login Screen',
            password:'PWD from Login Screen',
            img_path:""
        }
    }
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: "Go Back"
    };
    
    updateValues=(userName, Password, path)=>{
        console.warn(userName, Password, path);
        this.setState({
            username: userName,
            password: Password,
            img_path: path
        })
        
    }
    render() {
        return (
            <View style={styles.Container}>
                <View>
                    <Image 
                    style={styles.image}
                    source={{uri:this.state.img_path}} />
                    </View>
                <View style={{flexDirection:'row',}}>
                    <View>
                        <Text>Username:</Text>
                        <Text>Password :</Text>
                        </View>
                    <View>
                <Text>{this.state.username}</Text>
                <Text>{this.state.password} </Text>
                </View>
                </View>

                {/* <View style={styles.child_Container}> */}
                <ScrollView>
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
                    <Button_Comp
                        title="Select Image"
                        call={() => this.props.navigation.navigate('Select_Image')}
                    />
                    <Button_Comp
                        title="Log In"
                        call={() => this.props.navigation.navigate('login',{
                            username:this.state.username,
                            password:this.state.password,
                            updateValues:this.updateValues
                        })
                    }
                    />
                </ScrollView>
                {/* </View> */}

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
        Api_page: ReactFlat11,
        Axios_Api: ReacTTest,
        Post_Api: Post_API,
        Screen1: Screen_Assignment999,
        Screen2: Screen_Assign3,
        Select_Image: Image_Picker,
        login: login_form
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => (
                <TouchableOpacity style={{ paddingRight: 10, }}
                    onPress={() => { alert("Please add") }}>
                    <Text style={{ fontSize: 40 }}>+</Text>
                </TouchableOpacity>
            )
        }
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
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        fontSize: 20,
        fontWeight: "bold"
    },
    child_Container: {
        // backgroundColor: "pink",
        margin: 20,
        flex: 1
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:"pink",
        marginTop:10,
        marginBottom: 10,
    }
})