import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  handleNav = async () => {
    const { navigate } = this.props.navigation;

    console.log('test pressed');
    navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleNav}>
          <Image style={styles.image} source={require('../assets/icons/4f_logo.png')} />
          <Text style={styles.text}>Conecte-se</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    textAlign: 'center'
  },

  image: {
    height: 100,
    width: 100,
    aspectRatio: 1,
    resizeMode: 'stretch',
  }
});
