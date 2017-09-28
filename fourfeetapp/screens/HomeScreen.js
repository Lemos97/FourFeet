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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.row}>
            <View>
              <TouchableOpacity>
                <Image style={styles.buttonStyle} source={require('../assets/icons/play_icon.png')} />
                <Text>Jogar</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.buttonStyle} source={require('../assets/icons/user_icon.png')} />
                <Text>Perfil</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View>
                <TouchableOpacity>
                  <Image style={styles.buttonStyle} source={require('../assets/icons/ranking_icon.png')} />
                  <Text style={styles.text}>Ranking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },

  contentContainer: {
    paddingTop: 30,
  },

  row: {
    flexDirection: 'row'
  },

  text: {
    textAlign: 'center'
  },

  buttonStyle: {

  }
});
