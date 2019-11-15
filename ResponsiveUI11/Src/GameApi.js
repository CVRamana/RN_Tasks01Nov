import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,ActivityIndicator,Button } from 'react-native';
import Header11 from '../ReusableComponent/Header11'

import FGameComponent from '../ReusableComponent/FGameComponent'
import axios from 'axios'

class GameApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            isloaded:false,
            payload:[],
            game_data:'',
            hometeam:'',
        };
    }
    //
    componentDidMount(){
      //  this.hitApi()
    }

    //handleSearch
    handleSearch=()=>{
        if (this.state.input.length==0){
            alert("please add the Game id")
        }else{
        let num = this.state.input
        this.setState({
            isloaded:true
        })
        let url11 = 'https://free-nba.p.rapidapi.com/games/'+num

        axios.get(url11, {
            'headers': {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "X-RapidAPI-Key": '01d11eb9f6msh29672a60df4d0c7p19c296jsna5f98c3afed7'
            }
        })
            .then((response) => {
                console.log("from axios", (response.data))
                this.setState({ game_data: response.data,
                    hometeam:response.data.home_team,
                isloaded:false},()=>{
                    console.log("from game_data", this.state.game_data)
                   // alert(JSON.stringify(this.state.game_data.date))
                })
                
            })
            .catch((err) => {
                console.log("Error occured", err)
            })
    }
}

    //hit API
    hitApi = () => {
     
        let url11 = 'https://free-nba.p.rapidapi.com/games/'

        // let host='x-rapidapi-host'
        // let hostKey="free-nba.p.rapidapi.com"
        // let api='X-RapidAPI-Key'
        // let apiKey="01d11eb9f6msh29672a60df4d0c7p19c296jsna5f98c3afed7"

        axios.get({url11,timeout:1000*5}, {
            'headers': {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "X-RapidAPI-Key": '01d11eb9f6msh29672a60df4d0c7p19c296jsna5f98c3afed7'
            }
        })
            .then((response) => {
                console.log("from axios", (response.data.data))
                this.setState({ payload: response.data.data,
                isloaded:false},()=>{
                    console.log("from Payload", this.state.payload)
                })
               // alert("data received")
                
            })
            .catch((err) => {
                console.log("Can't fetch the data", err)
            })

    }

    render() {
        return (
            <View>
                {/* <Text> GameApi </Text>
                <Text> {this.state.input}</Text> */}
                <Header11
                    inputcall={(txt) => { this.setState({ input: txt }) }}
                    call={this.handleSearch}
                />


                   { this.state.isloaded ?
                    <View style={styles.active}>
                    <ActivityIndicator size="large" color="green" />
                    </View>
                    :
                    <View style={styles.card}>
                <Text>{this.state.game_data.date}</Text>
                <Text>{this.state.game_data.id}</Text>
               
               <Text > {this.state.hometeam.id}</Text>
                <Text > {this.state.hometeam.name}</Text>
                <Text > {this.state.hometeam.full_name}</Text>
                <Text > {this.state.hometeam.conference}</Text>
                <Button
                onPress={()=>{this.setState(
                    {game_data:'',
                     hometeam:''
                    })
        }}
                title="Delete"/>
               </View>
    }
               
                <FlatList
                    data={this.state.payload}
                    keyExtractor={(item, index) => { item.id }}
                    renderItem={({ item }) => {
                       // alert({item})
                        return(
                        <FGameComponent
                            id= {item.id}
                            date={item.date}
                        />
                        )
                    }}
                />

            </View>
        );
    }
}

export default GameApi;
const styles=StyleSheet.create({
   card:{
       backgroundColor: "pink",
       //justifyContent: 'center',
       margin: 20,
       borderRadius:10,
       alignItems: 'center',
       
   } ,
   active:{
       marginTop: 100,
   }
})