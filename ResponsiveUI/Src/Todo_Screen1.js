import React, { Component } from 'react';
import {
    View, Text, Button, StyleSheet, TextInput,
    ImageBackground, Image,
    TouchableOpacity, FlatList, Alert
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from
    'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import FlatListTodoComp from '../ReusableComponent/FlatListTodoComp'


class Todo_Screen1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            id: '',
            tasks: [],
        };
        this.inputrefs = React.createRef()
    };

    componentDidMount() {
        this.inputrefs.current.focus();
        this.props.navigation.setParams({
            deleteAll: this.deleteAll
        });
        this.getData()
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Todo App',
            headerRight: () => (
                <Button
                    onPress={() => params.deleteAll()}
                    title="Remove"
                    color="#f0f0f0"
                />
            ),
        }

    }
    // getting the data from Async

    getData =async () => {
       value =JSON.parse(await AsyncStorage.getItem('tasks'))
       alert(value)
       this.setState({
           tasks:value
       })
    }

    // , (data) => {
    //     console.log(JSON.parse(data))
    //     //alert(JSON.parse(data))
    //     if(data){
    //         this.setState({
    //             tasks: data
    //         })
    //     }
    // }



    // Storing data in the state
    addTask = () => {
        if (this.state.task.length === 0) {
            alert("Please add the task")
            return
        }
        let payload = {
            id: Math.random(),
            task: this.state.task,

        }
        let temp = []
        temp = this.state.tasks
        temp.push(payload)
        //alert(JSON.stringify(temp))
        this.setState({
            tasks: temp.splice(0),
            task: '',
            id: '',

        },async () => {
            alert(JSON.stringify(this.state.tasks))
            console.log(JSON.stringify(this.state.tasks))
           await AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        })
    }
    //Delete All
    deleteAll = () => {
        //alert("jjnn")
        Alert.alert(
            'Delete all ',
            'Are u sure ????',
            [
                {
                    text: 'Cancel',
                    onPress: () => { return },
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        this.setState({
                            tasks: []
                        }, () => {
                            AsyncStorage.clear()
                        })
                    }
                },
            ],
            { cancelable: false },
        );

    }
    //Delete F()
    deletTask = (id) => {
        // alert("hjdsgjh")
        let tasks = this.state.tasks.filter((obj) => obj.id !== id);
        this.setState({ tasks: tasks },async ()=>{
            AsyncStorage.clear()
            await AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))

        })
    }

    //renderItem
    renderItems = ({ item }) => {
        return (
            <FlatListTodoComp
                name={item.task}
                id={item.id}
                //   object11={item}
                deletTask={this.deletTask}
            />)
    }
    render() {
        return (
            // <View>
            <ImageBackground source={{
                uri: 'https://images.pexels.com/photos/3178881/pexels-photo-3178881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <View style={styles.FlatListView1}>

                    {/* flatlist */}
                    <FlatList
                        data={this.state.tasks}
                        //  keyExtractor={(id)=>item.id}
                        renderItem={this.renderItems}
                    />

                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        returnKeyType={"done"}
                        placeholder="Add Today's Task....."
                        ref={this.inputrefs}
                        onSubmitEditing={() => { this.addTask }}
                        value={this.state.task}
                        onChangeText={(txt) => { this.setState({ task: txt }) }}

                    />
                    <View style={styles.bttncontainer}>
                        <TouchableOpacity style={styles.addBttn}
                            onPress={this.addTask}
                        >
                            <Image
                                style={{ height: 50, width: 50 }}
                                source={require('../Assets/plus.png')}
                            />
                            {/* <Text>ADD TASK</Text> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            // </View>
        );
    }
}
export default Todo_Screen1;
const styles = StyleSheet.create({
    FlatListView1: {
        //backgroundColor: "pink",
        width: wp('100%'),
        height: hp('80%'),
    },
    inputView: {
        height: hp('12%'),
        // backgroundColor: "lightgrey",
        flexDirection: "row",
    },
    input: {
        height: hp('7%'),
        width: wp('80%'),
        borderRadius: hp('3.5%'),
        paddingLeft: 10,
        backgroundColor: "white"
    },
    addBttn: {
        width: wp('19%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: "center",
        //  backgroundColor: "green",
        borderRadius: 10
    },
    bttncontainer: {
        paddingTop: 10,

    }
})