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
import { ExpoConfigView } from '@expo/samples';
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
        <ExpoConfigView />
      </BackgroundImage>
    );
  }
}
