import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    View,
} from 'react-native';

export default class BackgroundImage extends React.Component {
    render() {
        return (
            <Image style={styles.backgroundImage} source={require('../assets/icons/4f_logo.png')}>
                {this.props.children}
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        opacity: 0.8,
        resizeMode: 'cover', // or 'stretch'
        width: null,
        height: null
    }
})
