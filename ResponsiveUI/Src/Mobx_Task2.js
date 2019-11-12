import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, FlatList,
  ActivityIndicator,
  Image, TouchableOpacity
} from 'react-native';
import Api_store from '../Store/Api_store'
import { observer } from 'mobx-react'
import CheckBox from 'react-native-check-box'
import Flat_api_com from '../ReusableComponent/Flat_api_comp'


@observer
class Mobx_Task2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refresing: false
    };

  }

  componentDidMount() {
    Api_store.hit_Api()
  }

  //handle Refresh
  handleRefresh = () => {
    this.setState({
      refreshing: true,
    })
    Api_store.page_no=1
  }


  render() {
    return (

      <View style={styles.parent}>
       

        {Api_store.isloading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        <FlatList
          onEndReached={() => {
            console.warn(this.page_no);
            if (Api_store.page_no <= 2) {
              Api_store.page_no = Api_store.page_no + 1;
              Api_store.hit_Api()
            } else {
              return
            }
          }}
          onEndReachedThresold={0.01}
          //pullto refresh
          refreshing={this.state.refresing}
          onRefresh={this.handleRefresh}
          
          data={Api_store.payload}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <Flat_api_com 
                  email11={item.email}
                  url11={item.avatar}
                  call={() => {
                              Api_store.id22 = item.id
                              console.warn(Api_store.id22)
                              Api_store.MultiDelete()
                            }}
                  />
               </View>)
            // return (
            //   <View style={styles.fp}>
            //     {/* Image */}
            //     <Text> {item.index}</Text>
            //     <View style={styles.img_p}>
            //       <Image
            //         style={styles.fimg}
            //         source={{ uri: item.avatar }}
            //       />
            //     </View>
            //     {/* email */}
            //     <View style={styles.txt}>
            //       <Text>{item.email} </Text>
            //       <Text> {item.first_name}</Text>
            //     </View>
            //     {/* checkbox and delete */}
            //     <View style={styles.bttns}>

            //       {/* checkbox */}
            //       <CheckBox
            //         style={{ flex: 1, padding: 10 }}
            //         onClick={(index) => {
            //           this.setState({
            //             isChecked: !this.state.isChecked
            //           })
            //         }}
            //      //   if(id ==={item.idex})
            //         isChecked={this.state.isChecked}
            //         checkedImage={<Image source={require('../Assets/check.png')} />}
            //         unCheckedImage={<Image source={require('../Assets/uncheck.png')} />}
            //       />
            //       <Button
            //         title="Delete"
            //         onPress={() => {
            //           Api_store.id22 = item.id
            //           console.warn(Api_store.id22)
            //           Api_store.MultiDelete()
            //         }}
            //       />
            //     </View>
            //   </View>
            // )
          }}

        />

      </View>
    );
  }
}

export default Mobx_Task2;
const styles = StyleSheet.create({
  parent: {
    backgroundColor: "lightgrey",
    alignItems: "center"
  },
  img_p: {
    padding: 10,
  },
  fimg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "lightgrey",

  },
  fp: {
    flexDirection: "row",
    width: 400,
    backgroundColor: "#9dcdf5",
    margin: 10,
    borderRadius: 20,
    paddingLeft: 10

  },
  txt: {
    width: 200,
    //backgroundColor:"lightgrey",
    justifyContent: "center",
    marginRight: 2,
  },
  check: {
    height: 30,
    width: 30,
    backgroundColor: "pink"
  },
  bttns: {
    justifyContent: "center",
    alignItems: "center"

  }

})