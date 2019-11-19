import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()
import GameApi from './GameApi';
import TabHomeScreen from './TabHomeScreen'
import TabSettingsScreen from './TabSettingsScreen'

class TabBar11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> TabBar11 </Text>
            </View>
        );
    }
}



const TabBar1 = createBottomTabNavigator(
    {
        TabBar11: TabBar11,
        TabHome: TabHomeScreen,
        TabSettings: TabSettingsScreen,
        Game: GameApi
    },
    {
        initialRouteName: 'TabBar11',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'TabHome') {
                    iconName = `ios-home`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'TabSettings') {
                    iconName = `ios-settings`;
                }
                else if (routeName == 'Game') {
                    iconName = `ios-basketball`
                }
                else if (routeName == 'TabBar11') {
                    iconName = `ios-apps`
                }
                // You can return any component that you like here!
                return <IconComponent
                    name={iconName}
                    size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
            // paddingBottom: 20,
            backgroundColor: "lightgrey"
        },
    }
);

export default createAppContainer(TabBar1);