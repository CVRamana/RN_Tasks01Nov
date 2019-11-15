import {StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


const styles=StyleSheet.create({
parent:{
flex:1,
},
child1:{
    backgroundColor:"#00886f",
    paddingTop:50,
    paddingBottom: 10,
    paddingLeft: 10,
   // padding:50,
    flexDirection:"row"
},
child2:{
    padding:10,
  //  backgroundColor:"green",
},
child3:{
   // backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center"
},
head_img:{
    height:80,
    width:80,
    borderRadius:40,
    backgroundColor:"orange",
   
},
HI_btn:{
    height:30,
    width:110,
    borderRadius:15,
    backgroundColor:"#00886f",
    justifyContent: 'center',
    //alignItems: 'center',
    paddingLeft: 3,
    //marginLeft:85,
    
},
rel_img:{
    height:60,
    width:60,
  //  marginLeft:13,
    borderRadius:30,
   // backgroundColor:"grey"
},
Benifit_img:{
    height:50,
    width:50,
   // marginLeft:40,
    paddingTop:10,
    paddingLeft: 10,
   //backgroundColor:"grey"
},
health_beauty:{
    backgroundColor:"pink",
    flexDirection:"row",
    paddingTop: 20,
    paddingLeft: 10,
    borderRadius:10,
    //justifyContent:"center",
    //alignItems:"center",
    paddingBottom: 50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},
course_train:{
    backgroundColor:"powderblue",
    flexDirection:"row",
    paddingTop: 20,
    paddingLeft: 10,
    borderRadius:10,paddingBottom: 50,
    marginTop:-13,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},
business_trip:{flexDirection:"row",
padding: 20,
backgroundColor:"pink",
paddingTop: 20,
    paddingLeft: 10,
    borderRadius:10,paddingBottom: 50,
    marginTop:-13,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,

},
history_content:{flexDirection:"row",
//backgroundColor:"powderblue",
paddingTop: 20,
paddingLeft: 10,
paddingBottom: 10,

},
history_content_F:{flexDirection:"row",
backgroundColor:"powderblue",
paddingTop: 20,
paddingLeft: 10,
paddingBottom: 10,

},
history_content_L:{flexDirection:"row",
backgroundColor:"powderblue",
paddingTop: 20,
paddingLeft: 10,
paddingBottom: 50,
},
history_content_M:{flexDirection:"row",
backgroundColor:"powderblue",

paddingLeft: 10,
paddingBottom: 10,
},
Htext:{
    color:"#c3978a",
    fontFamily:"CircularStd-BlackItalic",
    paddingRight:200
}




})
export default styles;