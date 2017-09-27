import React from 'react';
import { View,TouchableOpacity,Image,  StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  // _handleNav(){

  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity >{/*onPress={_handleNav()}>*/}
          <Image source={require('../assets/icons/4f_logo.png')} />
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
    justifyContent:'center',
    alignItems:'center'
  }
});
