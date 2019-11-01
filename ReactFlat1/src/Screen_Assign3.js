import React, { Component } from 'react'
import { Text, View, Image, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
const Data = [{
    id: 0,
    path: 'https://facebook.github.io/react/logo-og.png'
},
{
    id: 1,
    path: 'https://images.pexels.com/photos/1346216/pexels-photo-1346216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 2,
    path: 'https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 3,
    path: 'https://images.pexels.com/photos/1580173/pexels-photo-1580173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 3,
    path: 'https://images.pexels.com/photos/1580173/pexels-photo-1580173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 3,
    path: 'https://images.pexels.com/photos/1580173/pexels-photo-1580173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 4,
    path: 'https://images.pexels.com/photos/3083166/pexels-photo-3083166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 4,
    path: 'https://images.pexels.com/photos/3083166/pexels-photo-3083166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}, {
    id: 4,
    path: 'https://images.pexels.com/photos/3083166/pexels-photo-3083166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}, {
    id: 4,
    path: 'https://images.pexels.com/photos/3083166/pexels-photo-3083166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}, {
    id: 4,
    path: 'https://images.pexels.com/photos/3083166/pexels-photo-3083166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 5,
    path: 'https://images.pexels.com/photos/2994590/pexels-photo-2994590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 6,
    path: 'https://images.pexels.com/photos/1128240/pexels-photo-1128240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    id: 7,
    path: 'https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 8,
    path: 'https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 9,
    path: 'https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
    id: 10,
    path: 'https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
]
function Item({ path }) {
    console.log("path", path)
    return (
        <View style={styles.item}>
            <Image resizeMode={'cover'} style={styles.img}
                source={{ uri: path }}
            />
        </View>
    );
}
const col = 3;

export default class Screen_Assign3 extends React.Component {

    renderHeader() {
        return (
                <View style={styles.headerBg}>
                    <Text style={styles.headerText}>List Header</Text>
            </View>

        );
    }

    renderFooter = () => {

        return (
            <View style={styles.headerBg}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };


    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", paddingTop: 60 }}>
                <View style={styles.container}>
                    {/* <Text>Hello Everyone!!!!</Text> */}
                    <FlatList
                        ListHeaderComponent={this.renderHeader}
                        ListFooterComponent={this.renderFooter}

                        data={Data}
                        numColumns={col}
                        renderItem={({ item }) => <Item path={item.path} />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {


    },
    item: {

        marginLeft: 10,
        marginRight: 10,

        marginTop: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 32,
    },
    img: {
        height: 100,
        width: 100,
        margin: 2,
        borderRadius: 10
    },
    headerBg: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5544',
        height: 50,
        
    
    },
    headerText: {
        fontFamily: 'Verdana',
        fontSize: 20,
       
        color: '#FFFFFF',
    },

})