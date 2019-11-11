import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,FlatList,TextInput,
ImageBackground } from 'react-native';
import Demo from '../Store/ListStore'
import { observer } from 'mobx-react';
import Flat_comp from '../ReusableComponent/Flat_comp'

 @observer
class Todo extends Component {

  static navigationOptions = {
    
    title: 'MOBX Demo',
  }
  constructor(props) {
    super(props);
    this.inputrefs=React.createRef()
  
  }
  componentDidMount(){
    this.inputrefs.current.focus()
  }

  render() {
    return (
      <View style={styles.parent}>
        <ImageBackground
        style={styles.parent}

    
    source={{uri:"https://images.pexels.com/photos/2832078/pexels-photo-2832078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
        >
        <Text style={styles.txt}
        // textDecorationLine="underline"
        > Todo App </Text>


        <TextInput
        onChangeText={(txt)=>Demo.name=txt}
        ref={this.inputrefs}
        
        placeholder="Add the task"
        style={styles.input}
        />


        <TouchableOpacity
        style={styles.bttn_nav}
        onPress={()=>Demo.todo()}>
            <Text> Click me</Text>
          
            </TouchableOpacity>
            <Text style={{margin:10,fontSize:20,fontWeight:"400"}}>After updating the text the updated text is as follows: </Text>
          
            <FlatList
            data={Demo.tasks}
            renderItem={(item)=>{
              return (
               <Flat_comp
                id={item.index}
                 x={item.item}
                />
                // <View style={styles.fv}>
                //   <Text style={{fontSize:20}}>{item.item}</Text>
                  
                //   </View>
              )
            }
            }
            />
            </ImageBackground>
      </View>
    );
  }
}

export default Todo;
const styles=StyleSheet.create({
    parent:{
    //justifyContent: 'center',
    alignItems: 'center',
      //  paddingTop:20,
    height:'100%',
                width:'100%',
   // backgroundColor:"pink",

},
bttn_nav:{
  height:40,
  width:100,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:"orange",
  borderRadius:15,
},
input:{
  width:400,
  height:40,
  borderRadius:20,
  borderBottomWidth:3,
  borderBottomColor:"green",
  backgroundColor:"white",
  paddingLeft: 10,
  marginBottom: 20,
},
fv:{
  justifyContent: 'center',
  width:350,
  height:50,
  borderRadius:25,
  alignItems: 'center',
  margin: 6,
  backgroundColor:"orange",
  
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,

},
txt:{
  fontWeight:"400",
  fontSize:20,
  marginBottom: 20,
  textDecorationLine:"underline"
 
}
})
