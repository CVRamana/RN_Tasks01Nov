/**
 * @format
 */
import {AppRegistry} from 'react-native';
//import Image_multi from './src/Image_multi';
 //import Camera_Perm from './src/Camera_Perm'
import HomeScreen from'./src/HomeScreen'
import {name as appName} from './app.json';


 //AppRegistry.registerComponent(appName, () => Image_multi);
//AppRegistry.registerComponent(appName, () => Camera_Perm);
AppRegistry.registerComponent(appName, () => HomeScreen);
