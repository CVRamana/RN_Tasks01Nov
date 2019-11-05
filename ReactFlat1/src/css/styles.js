import {StyleSheet } from 'react-native';
const styles=StyleSheet.create({
    upload_parent:{
        flex: 1,
        paddingTop:50,
        alignItems: 'center',
    },
    upload_bttn:{
        height:50,
        width:100,
        backgroundColor:"green",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },
    upload_img: {
        width: 150,
        height: 150,
      
        alignItems: "center",
        backgroundColor:"red",
        marginBottom: 20,
        borderRadius: 75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    h_Container: {
        backgroundColor: "grey",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    h_txt: {
        fontSize: 20,
        fontWeight: "bold"
    },
    h_child_Container: {
        // backgroundColor: "pink",
        margin: 20,
        flex: 1
    },
    h_image:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:"pink",
        marginTop:10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    btn_bttn: {
        width: 290,
        height: 40,
        margin:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
        borderRadius:10
    },
   h_userText:{
        fontSize:20,
        
    }
})
export  default styles;