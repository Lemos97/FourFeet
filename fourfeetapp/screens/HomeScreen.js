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
                {/*style={b.style} onPress={_handleClick(b.nav)}>*/}
                {/* <Image source={require(b.img)}/> */}
                <Text>{buttons.TopLeft.text}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                {/*style={b.style} onPress={_handleClick(b.nav)}>*/}
                {/* <Image source={require(b.img)}/> */}
                <Text>{buttons.TopRight.text}</Text>
              </TouchableOpacity>
            </View>
            <View> 
              <TouchableOpacity>
                {/*style={b.style} onPress={_handleClick(b.nav)}>*/}
                {/* <Image source={require(b.img)}/> */}
                <Text>{buttons.BottomLeft.text}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                {/*style={b.style} onPress={_handleClick(b.nav)}>*/}
                {/* <Image source={require(b.img)}/> */}
                <Text>{buttons.BottomRight.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const buttons = {
  TopLeft: {
    text: 'Jogar',
    // style:'',
    // nav:'',
    // img:''
  },
  TopRight: {
    text: 'Perfil',
    // style:'',
    // nav:'',
    // img:''
  },
  BottomLeft: {
    text: 'Ranking',
    //   style:'',
    //   nav:'',
    //   img:''
  },
  BottomRight: {
    text: 'Sobre',
    // style:'',
    // nav:'',
    // img:''
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 30,
  },
  
  row:{
    flexDirection:'row'
  },

  buttonStyle: {
    height:'110px',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
