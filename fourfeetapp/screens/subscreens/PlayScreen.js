import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View, Modal
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import BackgroundImage from '../../components/BackgroundImage'
import { progressiveExercise, individualExercise } from '../../api/patternExercises';



export default class PlayScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            ongoingModal: false,
            selectorModal: false
        };
    }

    static navigationOptions = {
        header: <Text> Jogar</Text>,
    };

    handleProgressive = async () => {
        const resp = await progressiveExercise({ progressive: "yes" })

        this.setModalVisible(true, 'ongoing')
        if (resp.isSuccess) {
            this.setModalVisible(false, 'ongoing')
        }
    }

    setModalVisible(visible, type) {
        if (type == 'ongoing') {
            this.setState({ ongoingModal: visible });
        }
        if (type == 'selector') {
            this.setState({ selectorModal: visible });
        }
    }


    shouldComponentUpdate(nextState) {
        if (this.state.ongoingModal != nextState.ongoingModal) {
            return true
        }
        if (this.state.selectorModal != nextState.selectorModal) {
            return true
        }
        return false
    }

    componentWillUpdate() {
        <Modal
            onRequestClose={() => { alert("Exercicio acabado.") }}
            transparent={true}
            visible={this.state.ongoingModal}
        >
            <View>
                <View>
                    <Text>Exercicio em progresso, aguarde...</Text>
                </View>
            </View>
        </Modal>
    }


    render() {
        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.col}>
                            <View style={styles.row}>
                                <TouchableOpacity style={[styles.btnLayout, styles.playLayout, { marginBottom: 20 }]} onPress={this.handleProgressive}>
                                    <Image style={styles.image} source={require('../../assets/icons/progressive_play.png')} />
                                    <Text style={styles.text}>Gradual ( Default )</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.col}>
                                <View style={styles.row}>
                                    <TouchableOpacity style={[styles.btnLayout, styles.playLayout]}>
                                        <Image style={styles.image} source={require('../../assets/icons/select_play.png')} />
                                        <Text style={styles.text}>Selecionar nível ( Individual )</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

