import React, { Component } from 'react';

import {
  View, Text, StyleSheet, TouchableOpacity,
  Button, props, FlatList,
  TextInput, Image,
  ActivityIndicator
} from 'react-native'
import axios from 'axios'

function Item({ desc, title, url1 }) {
  return (

    <View style={styles.item}>
      <View style={styles.cardImage}>
        <Image
          style={{ width: 66, height: 58,marginTop:-18,borderRadius:10 }}
          source={{ uri: url1 === null ? 'https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' : url1 }}
        />

      </View>
      <View style={styles.cardtitle}>
        <View style={{
          flexDirection: "row"
        }}>
          <Text style={{ fontWeight: "bold" }}>  Title:</Text>
          <Text style={{ width: 200 }}>{title}</Text>
        </View>
        <View style={{
          flexDirection: "row"
        }}>
          <Text style={{ fontWeight: "bold" }}>  Desc:</Text>
          
          <Text 
                style={{width:190}}
            >{desc}</Text>
           
            

        </View>
      </View>
    </View>
    
  );
}

export default class ReacTTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payLoad: [],
      isLoading: false,
      textinput: '',
      textShown: -1,
     
    };
  };


//Getting the data from PI on button click
  getData = () => {
    this.state.isLoading=true
    axios({
      method: "get",
      url: 'https://newsapi.org/v2/everything?q=' + this.state.textinput + '&apiKey=e10cde259f5149f5bb8fd262f4cee8c5',
    })
      .then(response => {
        this.setState({
          payLoad: response.data.articles,
          isLoading: false
        })

        console.log(response)
        console.warn(response.data.articles[0].url)
      })
  }



  render() {
   
    
    return (

      <View style={styles.container1}>
        <View style={styles.container2}>
          <TextInput style={{
            height: 40,
            width: 340,
            backgroundColor: "white",
            borderRadius: 10,
            paddingLeft: 20,

          }}
            autoCapitalize='none'
            value={this.state.textinput}
            onChangeText={(text) => { this.setState({ textinput: text }) }
            }
          />
          <Button title="Get News" onPress={this.getData} />
        </View>
        <View style={styles.FlatView}>
          <FlatList
            data={this.state.payLoad}
            renderItem={({ item }) => <Item
              desc={item.description}
              title={item.title}
              url1={item.urlToImage}
            />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
  },
  container2: {
    backgroundColor: "pink",
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 10
  },
  active: {
    justifyContent: "center",
    alignItems: "center"
  },
  cardtitle: {

  },
  cardDesc: {

  },
  cardImage: {

  },


  FlatView: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"red"

  }

})