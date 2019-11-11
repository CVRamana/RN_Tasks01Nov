import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
// import styles from '../Constants/styles'
import { Styles as styles, Strings,Images } from '../Constants';
import Header_comp from '../ReusableComponent/Header_comp'
import Health_Insurance from '../ReusableComponent/Health_Insurance'
import Bal_comp from '../ReusableComponent/Bal_comp'
import Relative_Img from '../ReusableComponent/Relative_Img'
import History_comp from '../ReusableComponent/History_comp'
import Business_trip_comp from '../ReusableComponent/Business_trip_comp'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
  

class ResponsiveUI extends Component {
    static navigationOptions = {
        title: 'Responsive UI',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.parent}>
                <ScrollView>
                   
                    <View style={{backgroundColor:"red"}}>
                    <Header_comp
                        name="Marcus Henry"
                        url_pro={Images.profile}
                        level='3'
                    />
                    </View>
<Image
style={{width:160,height:80,marginLeft: 230,marginTop: -70,backgroundColor: "gey",}}
source={Images.cloud}
/>

                    <View style={styles.child2}>
                        <Health_Insurance
                            txt="Health Insurance"
                            title="Card Details"
                            arrow={Images.arrow}
                            call={() => { } }/>
                    </View>

                    <View style={styles.child3}>

                        <Bal_comp
                        />
                    </View>
                    <Text style={{ margin: 10 }}>Relatives</Text>
                    {/* Relative Images */}

                    <View style={{ flexDirection: "row",
                    width: wp('100%'),
                   // borderColor:"red",
                  //  borderWidth:2,

                 }}>
                        <Relative_Img
                            rname="Wife"
                            url={Images.r1}
                            extraStyle={{
                               // marginLeft: 10,
                              // backgroundColor:"lightgrey"
                            }}
                            url1={Images.accept}
                        />
                        <Relative_Img
                            rname="Child"
                            url={Images.r1}
                            extraStyle={{
                              //  marginLeft: 10,
                            }}
                            url1={Images.accept}
                         
                        />
                        <Relative_Img
                            rname="add"
                            url={Images.plus}
                            extraStyle={{marginLeft: 3}}
                           // url1={Images.accept}
                        />
                        <Relative_Img
                            rname="add"
                            extraStyle={{
                                //marginLeft: -10,
                            }}
                            url={Images.plus}
                           // url1={Images.accept}
                        />
                        <View style={{
                            height:70,
                          //  width:wp(3%),
                            backgrundColor:"grey",
                           // marginLeft:10,
                        }}>
                            </View>
                        <View style={{
                        //alignItems:"center",
                        justifyContent:"center",
                        //backgroundColor:"lightgrey",
                        width:wp('20%'),
                        paddingTop:10,
                        
                        }} >
                            <Image
                                style={styles.Benifit_img}
                                source={Images.benifit}
                            />
                            <Text
                            //numberOfLines={0}
                             style={{ marginTop: 25 ,
                            // marginLeft: 10,
                        }}>Benefit Transfer </Text>
                        </View>

                    </View>

 {/* history view all */}

                    <View style={{
                        flexDirection: "row",
                        padding: 20,
                        //color:"#c3978a"
                    }}>
                        <Text style={styles.Htext}>History</Text>
<View style={{flexDirection:"row-reverse"}}>
                        <Text style={styles.Htext}>View all</Text>
</View>
                    </View>
{/* history  */}
                    <View>
                        <History_comp
                            extraStyle={{
                                paddingTop: 15,
                            }}
                        />
                        <History_comp
                            extraStyle="history_content_M"
                        />
                        <History_comp
                            extraStyle="history_content_M"
                        />
                        <History_comp
                            extraStyle={{paddingBottom: 30,}}
                        />
                    </View>
{/*  healt and beauty */}

                    <View style={styles.health_beauty}>
                        <View style={{
                            justifyContent:"center",
                            width: wp('50%'),
                        }}>
                        <Text>Health and Beauty</Text>
                        </View>
                        <View style={{
                            width: wp('50%'),
                          
                            alignItems:"center",
                           
                            }}>
                        <Text>5.0000.000000</Text>
                        </View>
                    </View>
                    <View style={styles.course_train}>
                    <View style={{
                            justifyContent:"center",
                            width: wp('50%'),
                        }}>

                        <Text>Course and Training</Text>
                        </View>
                        <View style={{
                           width: wp('50%'),
                            justifyContent:"center",
                            alignItems:"center",
                        //backgroundColor:"pink"
                        }}>
                        <Text >5.0000.000000</Text>
                        </View>
                    </View>
                    <Business_trip_comp
                    />

                </ScrollView>
            </View>
        );
    }
}

export default ResponsiveUI;
