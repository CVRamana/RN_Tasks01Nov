import React, { Component } from 'react';

export default class MainScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          title:"",
          
          isLoading:true,
      };
    };
 
    getData=()=>{
        axios({
            method:"get",
            url:"https://newsapi.org/v2/everything",
            headers:{'apiKey':'e6abc0d5fe6941c990f87fa9dbd76568'},
        })
        .then(response=>{
            let src=response.data.data.profile_pic
            //setting the given url
            this.setState({urlImg:src})

    
            console.warn(response)
            console.warn(src)
        })
    }
    
componentDidMount(){
    this.getData()
}

  render() {
    return (
      <View> 
          <Text>textInComponent </Text>
          </View>
    );
  }
}
