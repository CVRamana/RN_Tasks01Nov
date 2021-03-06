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
import Uploads from './Uploads';
import I18n from '../src/utils/i18n'
import Async_Storage from '../src/Asynch_Storage'
//import ReactFlat11 from '../../../ReactNativePractice/src/ReactFlat11'
import styles from '../src/css/styles'
import SignUp from '../src/SignUp'
 import login1 from '../src/login'
import Dashboard from '../src/Dashboard'
import Dashboard_g from '../src/Dashboard_g'
import GoogleSignin11 from './GoogleSignin11'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        console.log("Current user",GoogleSignin.getCurrentUser());
        this.state={
            username:'USN',
            password:'PWD',
            gmail:'',
            img_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AMD3JOvBY-Q_3u4H2HtZ-hqegF61NXhhe4baeDdBOetyV6hy&s"
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
componentDidMount(){
    AsyncStorage.getItem('email', (err, result) => {
        console.log("result",result)
        this.setState({gmail: result})})
       
}

    render() {
        console.log("sdfsdf")
        return (
            <View style={styles.h_Container}>
                <View>
                    <Image 
                    style={styles.h_image}
                    source={{uri:this.state.img_path}} />
                    </View>
                <View style={{flexDirection:'row',}}>
                    <View>
                        <Text style={styles.h_userText}>Username:</Text>
                        <Text style={styles.h_userText}>Password :</Text>
                        <Text>{I18n.t("hello")}</Text>
                        </View>
                    <View>
                <Text style={styles.h_userText}>{this.state.username}</Text>
                <Text style={styles.h_userText}>{this.state.password} </Text>
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

                    <Button_Comp
                        title="Upload Image"
                        call={() => this.props.navigation.navigate('Upload_File')}
                    />

                     <Button_Comp
                        title="Asynch_Storage"
                        call={() => this.props.navigation.navigate('Async')}
                    />

                    <Button_Comp
                        title="Google"
                        call={() => {
                            if(this.state.gmail !== null){
                                this.props.navigation.navigate('Dashboard_g')
                            }else{
                                this.props.navigation.navigate('Google')
                            }
                        }}
                    />

                </ScrollView>
    
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
        login: login_form,
        Upload_File:Uploads,
        Async:Async_Storage,
        SignUp:SignUp,
       login_async:login1,
        Dashboard:Dashboard,
        Google:GoogleSignin11,
        Dashboard_g:Dashboard_g,
       
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
