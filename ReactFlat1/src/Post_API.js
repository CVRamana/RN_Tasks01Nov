import React, { Component } from 'react';
import {View,Text, StyleSheet,props,TouchableOpacity,Image} from 'react-native'
import axios from 'axios'

export default class Post_API extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoad:true,
            authToken:'',
            urlImg:''
        }
    }

getToken = ()=>{
    axios.post('https://abhiparker.herokuapp.com/user/login',{
    'name':"ramanverma",
    'email':'ramanverma693@gmail.com',
    'password':'raman123'  
})
.then((response)=>{
console.warn(response)
this.setState({
    authToken:response.data.data
})

})
.catch((err)=>{
    console.log(err)
})
}

getData=()=>{
    let userToken="Bearer "+this.state.authToken
    axios({
        method:"get",
        url:"https://abhiparker.herokuapp.com/user/",
        headers:{"Authorization":userToken}
    })
    .then(response=>{
        let src=response.data.data.profile_pic
        //setting the given url
        this.setState({urlImg:src})

        console.warn(response)
        console.warn(src)
    })
}

  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"pink"}}> 
          <TouchableOpacity  onPress={this.getToken }>
              <Text>Post Req</Text>
          </TouchableOpacity>
          <TouchableOpacity title="Get Clicked" onPress={this.getData} >
          <Text>Get Data</Text>
          </TouchableOpacity>
          <Image style={{height:100,width:150}}
          source={{uri:this.state.urlImg}}/>
           </View>
    );
  }
}
