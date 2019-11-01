import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default class componentName extends Component {
    render() {
        return (
            <ScrollView>

                <View>
                    <View style={styles.parent_container}>

                        <View style={styles.parent_container1}>
                            <Image
                                source={require("../Images/arrow.png")}
                            />
                        </View>
                        <View style={styles.parent_container2}><Text style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 18
                        }}>Hall Of Fame</Text>
                        </View>

                        <View style={styles.parent_container3}>
                            <View style={{
                                backgroundColor: "white",
                                flexDirection: "row",
                                flex: 1,
                                paddingTop: 3,
                                paddingLeft:5,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{ height: 15, width: 15, borderRadius: 20, }}
                                    source={require('../Images/plus.png')}
                                />
                                <Text style={{ paddingLeft: 4 ,paddingRight: 4,paddingBottom: 3,}}>7/15 Votes</Text>

                            </View>

                        </View>
                    </View>

                    <View style={styles.container2}>{/* //container2 */}
                        {/* <Text> textInCompnt2 </Text> */}
                        <View style={{
                            flex: .15,
                            flexDirection: "row",
                            backgroundColor: "white",
                            paddingTop: 17,

                        }}>
                            <View style={{ flex: 1, justifyContent: "center", paddingLeft: 20 }}>
                                <Text style={{ fontSize: 19, fontWeight: "bold" }}>January </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "center", flexDirection: "row-reverse", paddingLeft: 20 }}>
                                <Text style={{ fontSize: 19, }}>2 Challenges</Text>
                            </View>

                        </View>

                        {/* <Text> for imgaes</Text> */}
                        <View style={{
                            backgroundColor: "pink",
                            flex: .8,
                            flexDirection: "row",
                            margin: 15,
                            //padding:10,
                            borderRadius: 10
                        }}>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani1.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 21,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white",
                                    flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                        }}
                                        source={require('../Images/first.png')}
                                    />
                                    <Text style={{paddingTop:6}}>1st  </Text>
                                </View>

                            </View>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani2.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 16,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white"
                                    , flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/second.png')}
                                    />
                                    <Text style={{paddingTop:6}}>2nd </Text>
                                </View>


                            </View>
                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani3.jpg')}
                                />
                                {/* //absolute */}

                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 19,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white", flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/third.png')}
                                    />
                                    <Text style={{paddingTop:6}}>3rd </Text>
                                </View>


                            </View>

                        </View>

                        <View style={{
                            backgroundColor: '#f0f0f0',
                            height: 70,
                            width: 300, position: 'absolute',
                            marginTop: 193,
                            borderRadius: 30,
                            shadowColor: "#000",
                            justifyContent: "center",
                            alignItems: "center",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,
                            marginLeft: 38,
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Jungle Safari</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source={require("../Images/timer.png")} />
                                <Text style={{ fontSize: 13 }}>1 January 2018 - 20 January 2018</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.container2}>{/* //container2 */}
                        {/* <Text> textInCompnt2 </Text> */}


                        {/* <Text> for imgaes</Text> */}
                        <View style={{
                            backgroundColor: "pink",
                            flex: .75,
                            flexDirection: "row",
                            marginTop: 35,
                            //padding:10,
                            marginLeft:15,
                            marginRight:15,
                            borderRadius: 10
                        }}>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani1.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 21,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white",
                                    flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                        }}
                                        source={require('../Images/first.png')}
                                    />
                                    <Text style={styles.text1}>1st</Text>
                                </View>

                            </View>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani2.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 16,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white"
                                    , flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/second.png')}
                                    />
                                    <Text style={styles.text1}>2nd </Text>
                                </View>


                            </View>
                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani3.jpg')}
                                />
                                {/* //absolute */}

                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 19,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white", flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/third.png')}
                                    />
                                    <Text style={styles.text1}>3rd</Text>
                                </View>


                            </View>

                        </View>

                        <View style={{
                            backgroundColor: '#f0f0f0',
                            height: 70,
                            width: 300, position: 'absolute',
                            marginTop: 165,
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,
                            marginLeft: 38,
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Roads Travelled</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source={require("../Images/timer.png")} />
                                <Text style={{ fontSize: 13 }}>1 January 2018 - 20 January 2018</Text>
                            </View>
                        </View>




                    </View>

                    <View style={styles.container4}>

                        <View style={styles.container2}>{/* //container2 */}
                        {/* <Text> textInCompnt2 </Text> */}
                        <View style={{
                            flex: .1,
                            flexDirection: "row",
                            backgroundColor: "white",
                           // paddingTop: 9,

                        }}>
                            <View style={{ flex: 1, justifyContent: "center", paddingLeft: 20 }}>
                                <Text style={{ fontSize: 19, fontWeight: "bold" }}>February </Text>
                            </View>
                            

                        </View>

                        {/* <Text> for imgaes</Text> */}
                        <View style={{
                            backgroundColor: "pink",
                            flex: .75,
                            flexDirection: "row",
                            margin: 15,
                            //padding:10,
                            borderRadius: 10
                        }}>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani1.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 21,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white",
                                    flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                        }}
                                        source={require('../Images/first.png')}
                                    />
                                    <Text style={styles.text1}>1st  </Text>
                                </View>

                            </View>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani2.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 16,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white"
                                    , flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/second.png')}
                                    />
                                    <Text style={styles.text1}>2nd </Text>
                                </View>


                            </View>
                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani3.jpg')}
                                />
                                {/* //absolute */}

                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 19,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white", flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/third.png')}
                                    />
                                    <Text style={styles.text1}>3rd </Text>
                                </View>


                            </View>

                        </View>

                        <View style={{
                            backgroundColor: '#f0f0f0',
                            height: 70,
                            width: 300, position: 'absolute',
                            marginTop: 170,
                            borderRadius: 30,
                            shadowColor: "#000",
                            justifyContent: "center",
                            alignItems: "center",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,
                            marginLeft: 38,
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Jungle Safari</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source={require("../Images/timer.png")} />
                                <Text style={{ fontSize: 13 }}>1 January 2018 - 20 January 2018</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.container2}>{/* //container2 */}
                        {/* <Text> textInCompnt2 </Text> */}


                        {/* <Text> for imgaes</Text> */}
                        <View style={{
                            backgroundColor: "pink",
                            flex: .76,
                            flexDirection: "row",
                            margin: 15,
                            //padding:10,
                            borderRadius: 10
                        }}>

                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani1.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 21,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white",
                                    flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                        }}
                                        source={require('../Images/first.png')}
                                    />
                                    <Text style={styles.text1}>1st</Text>
                                </View>

                            </View>

                            <View style={{
                                backgroundCoßlor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani2.jpg')}
                                />
                                {/* //absolute */}
                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 16,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white"
                                    , flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/second.png')}
                                    />
                                    <Text style={styles.text1}>2nd </Text>
                                </View>


                            </View>
                            <View style={{
                                backgroundColor: "pink",
                                flex: 1,
                                margin: 10
                            }}>
                                <Image
                                    style={{ height: 90, width: 95, borderRadius: 10 }}
                                    source={require('../Images/ani3.jpg')}
                                />
                                {/* //absolute */}

                                <View style={{
                                    marginTop: 70,
                                    marginLeft: 19,
                                    borderRadius: 20,
                                    padding: 5,
                                    position: "absolute",
                                    backgroundColor: "white", flexDirection: "row"
                                }}>
                                    <Image
                                        style={{
                                            height: 30, width: 30,
                                            borderRadius: 10
                                        }}
                                        source={require('../Images/third.png')}
                                    />
                                    <Text style={styles.text1}>3rd</Text>
                                </View>


                            </View>

                        </View>

                        <View style={{
                            backgroundColor: '#f0f0f0',
                            height: 70,
                            width: 300, position: 'absolute',
                            marginTop: 150,
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,
                            marginLeft: 38,
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Roads Travelled</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source={require("../Images/timer.png")} />
                                <Text style={{ fontSize: 13 }}>1 January 2018 - 20 January 2018</Text>
                            </View>
                        </View>




                    </View>





                        
                    </View>






                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({

    parent_container: {
        flex: 1,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
    },
    parent_container1: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center"
    },
    parent_container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    parent_container3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 13,
        paddingBottom: 13
        //backgroundColor:"white"
    },
    container1: {
        flex: 1,
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    container2: {

        //backgroundColor: "white",

        height: 250


    },
    text1:{
        paddingTop:5,
    },
    container3: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"

    },
    container4: {
        flex: 1,
        // height:300,
       
    },
    container1: {

    },
    container1: {

    },
})
