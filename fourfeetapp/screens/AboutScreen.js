import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <BackgroundImage>
        <View><ScrollView></ScrollView></View>
      </BackgroundImage>
    );
  }
}
