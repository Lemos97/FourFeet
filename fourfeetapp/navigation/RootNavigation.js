import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import MainTabNavigator from './MainTabNavigator';
import LandingScreen from '../screens/LandingScreen';
import PlayScreen from '../screens/subscreens/PlayScreen';
import ProfileScreen from '../screens/subscreens/ProfileScreen';
import RankingScreen from '../screens/subscreens/RankingScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Landing: { screen: LandingScreen },
    Home: { screen: MainTabNavigator },
    Play: { screen: PlayScreen },
    Profile: { screen: ProfileScreen },
    Ranking: { screen: RankingScreen },
  },
  {
    navigationOptions: () => ({
      headerLeft: <Ionicons
        name={'ios-apps-outline'}
        size={25}
        style={{ marginBottom: -3 }}
        color={'#48BBEC'}
      />,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
