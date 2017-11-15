import React from 'react';
import { Platform, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'About':
            iconName = Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle';
        }
        return (
          // <Icon name={iconName}
          //   size={25}
          //   style={{ marginBottom: -3 }}
          //   color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
          <Text>{iconName}</Text>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.lightBlue,
      inactiveTintColor: "white",
      activeBackgroundColor: "white",
      showLabel: true,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: Colors.lightBlue
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
