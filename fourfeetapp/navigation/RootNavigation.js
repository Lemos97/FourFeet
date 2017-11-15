import React from 'react';
import { Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LandingScreen from '../screens/LandingScreen';
import PlayScreen from '../screens/subscreens/PlayScreen';
import ProfileScreen from '../screens/subscreens/ProfileScreen';
import EditProfileScreen from '../screens/subscreens/EditProfileScreen';
import RankingScreen from '../screens/subscreens/RankingScreen';

const RootStackNavigator = StackNavigator(
  {
    Landing: { screen: LandingScreen },
    Home: { screen: MainTabNavigator },
    Play: { screen: PlayScreen },
    Profile: { screen: ProfileScreen },
    Edit: { screen: EditProfileScreen },
    Ranking: { screen: RankingScreen },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    })
  });

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator />;
  }
}
