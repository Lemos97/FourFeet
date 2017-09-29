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
import { StackNavigator } from 'react-navigation';



export default class PlayScreen extends React.Component {
    static navigationOptions = {
        header: <Text> Jogar</Text>,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.col}>
                        <View style={styles.row}>
                            <TouchableOpacity style={[styles.btnLayout, styles.playLayout]}>
                                <Image style={styles.image} source={require('../../assets/icons/play_icon.png')} />
                                <Text style={styles.text}>Gradual ( Default )</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.col}>
                            <View style={styles.row}>
                                <TouchableOpacity style={[styles.btnLayout, styles.playLayout]}>
                                    <Image style={styles.image} source={require('../../assets/icons/play_icon.png')} />
                                    <Text style={styles.text}>Selecionar nível ( Individual )</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    playLayout: {
        width: 150,
        height: 150
    },

    btnLayout: {
        borderColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: '#4682B4',
        alignItems: 'center',
        padding: 5,
        height: 75,
    },

    text: {
        color: 'white',
    },

    col: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        flex: 1,
        height: 100,
        width: 100,
        aspectRatio: 1,
        resizeMode: 'contain',
    }
});

