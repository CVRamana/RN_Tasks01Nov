import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,Button,TextInput,ActivityIndicator1 } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()
import VedioComp from '../ReusableComponent/VedioComp';
import axios from 'axios'
import TabHomeScreen from './TabHomeScreen'
import TabSettingsScreen from './TabSettingsScreen'
import GameApi from './GameApi'

class Video11 extends Component {
  static navigationOptions = {
    title:'none',
  };
  constructor(props) {
    super(props);
    this.state = {
      payload:[],
      isLoad:true,
      input11:''
    };
  }

hitAPI(){
    let q=this.state.input11
    //alert(JSON.stringify(q))
    alert(q)
    let url11='https://api.pexels.com/videos/search?query='+q+'&per_page=15&page=1'
  axios.get(url11, {
      'headers': {
          "Authorization": "563492ad6f91700001000001370df76bf907419f9ae382dc275025fb",
      }
  }).then((res)=>{
console.log("pure data",res.data)
this.setState({
  payload:res.data.videos,
  isLoad:false
})

  })
}
  
  render() {
    return (
      <View style={styles.parent}>
       <View style={{flexDirection: 'row',padding:10}}>
         <TextInput
         onChangeText={(txt)=>this.setState({input11:txt})}
         onSubmitEditing={()=>this.hitAPI()}
         autoCapitalize='none'
         returnKeyType='search'
         placeholder="Enter the content for the vedio...."
         style={styles.inpt}
         />
         <Button
         style={styles.bttn}
         title="Search"
         onPress={()=>this.hitAPI()}
         />
         </View>

        <FlatList
        
        data={this.state.payload}
        keyExtractor={(item,id)=>id}
        renderItem={({item})=>{
          return (
            <VedioComp
            name={item.video_files[0].link}
            />
          )
        }}
        />
      </View>
    );
  }
}

const Video1 = createBottomTabNavigator(
    {
        Video11:Video11,
        TabHome: TabHomeScreen,
        TabSettings: TabSettingsScreen,
        Game: GameApi
    },
    {
        initialRouteName: 'Video11',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'TabHome') {
                    iconName = `ios-home`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'TabSettings') {
                    iconName = `ios-settings`;
                }
                else if (routeName == 'Game') {
                    iconName = `ios-basketball`
                }
                else if (routeName == 'Video11') {
                    iconName = `ios-apps`
                }
                // You can return any component that you like here!
                return <IconComponent
                    name={iconName}
                    size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
            // paddingBottom: 20,
            backgroundColor: "lightgrey"
        },
    }
);

export default createAppContainer(Video1);


//export default Video11;
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
   backgroundColor:"pink",
    height:300,
    width:300,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  parent:{
   // alignItems:"center",
    flex:1
  },
  inpt:{
    height:40,
    width:300,
    backgroundColor:"pink",
    borderRadius:20,
    paddingLeft:10,
    //margin:10
  },bttn:{
    paddingTop:10
  }
});