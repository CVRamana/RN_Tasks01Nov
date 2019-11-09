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


class ResponsiveUI extends Component {
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

                    <View style={{ flexDirection: "row" }}>
                        <Relative_Img
                            rname="Wife"
                            url={Images.r1}
                            extraStyle={{marginLeft: 10,}}
                            url1={Images.accept}
                        />
                        <Relative_Img
                            rname="Child"
                            url={Images.r1}
                            extraStyle={{marginLeft: 10,}}
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
                            extraStyle={{marginLeft: -10,}}
                            url={Images.plus}
                           // url1={Images.accept}
                        />
                        <View style={{height:70,width:3,backgroundColor:"grey"}}>
                            </View>
                        <View style={{marginTop:5,
                        //flexDirection:"row",
                        paddingLeft:10,
                      //  backgroundColor:"pink"
                       // alignItems:"center"
                      // justifyContent:"center"
                        }} >
                            <Image
                                style={styles.Benifit_img}
                                source={Images.benifit}
                            />
                            <Text
                            numberOfLines={0}
                             style={{ marginTop: 25 ,
                            // marginLeft: 10,
                        }}>Benefit </Text>
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
                    {/* healt and beauty */}
                    <View style={styles.health_beauty}>
                        <Text>Health and Beauty</Text>
                        <View style={{paddingLeft:80}}>
                        <Text>5.0000.000000</Text>
                        </View>
                    </View>
                    <View style={styles.course_train}>
                        <Text>Course and Training</Text>
                        <View style={{paddingLeft:70,
                        backgroundColor:"pink"}}>
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
