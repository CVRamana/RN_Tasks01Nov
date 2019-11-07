/**
 * @format
 */
import {AppRegistry} from 'react-native';
//import Image_multi from './src/Image_multi';
 //import Camera_Perm from './src/Camera_Perm'
import HomeScreen from'./src/HomeScreen'
//import Animations from './src/Animations'
//import Uploads from './src/Uploads'
//import myApp from './src/progerssBar'
import {name as appName} from './app.json';
 //AppRegistry.registerComponent(appName, () => Image_multi);
//AppRegistry.registerComponent(appName, () => Camera_Perm);
AppRegistry.registerComponent(appName, () => HomeScreen);
//AppRegistry.registerComponent(appName, () => Uploads);
//AppRegistry.registerComponent(appName,()=>myApp)
//AppRegistry.registerComponent(appName,()=>Animations)