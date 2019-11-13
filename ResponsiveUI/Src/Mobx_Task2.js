import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, } from 'react-native';
import Api_store from '../Store/Api_store'
import { observer } from 'mobx-react'

import Flat_api_com from '../ReusableComponent/Flat_api_comp'

@observer
class Mobx_Task2 extends Component {
  state = {
    refresing: false
  };
  componentDidMount() {
    Api_store.hit_Api()
  }
  //handle Refresh
  handleRefresh = () => {
    this.setState({
      refreshing: true,
    })
    Api_store.page_no = 1
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
                  obj={item}
                  call={() => {
                    Api_store.id22 = item.id
                    console.warn(Api_store.id22)
                    Api_store.MultiDelete()
                  }}
                />
              </View>)
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
})