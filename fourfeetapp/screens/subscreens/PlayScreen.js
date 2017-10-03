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
import { Ionicons } from '@expo/vector-icons';


import BackgroundImage from '../../components/BackgroundImage'
import { progressiveExercise, individualExercise } from '../../api/patternExercises';



export default class PlayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ongoingModal: false,
            selectorModal: false
        };
    }

    static navigationOptions = {
        headerRight: <Text>Jogar</Text>,
        headerLeft: ({ goBack }) => (
            <TouchableOpacity onPress={() => { goBack }}>
                <Image style={{ width: 50, height: 50, }} source={require('../../assets/icons/home.png')} />
            </TouchableOpacity>
        ),
    };

    handleProgressive = async () => {
        this.setState({
            ongoingModal: true
        });
        const resp = await progressiveExercise({ progressive: "yes" })

        if (resp.isSuccess) {
            this.setState({ ongoingModal: false });
        }
    }

    handleSelectClick = async () => {
        this.setState({ selectorModal: true });
    }

    componentDidUpdate(_, prevState) {

        if (this.state.ongoingModal != prevState.ongoingModal) {
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

        if (this.state.selectorModal != prevState.selectorModal) {
            <Modal
                onRequestClose={() => { alert("Exercicio acabado.") }}
                transparent={true}
                visible={this.state.selectorModal}
            >
                <View>
                    <View>
                        <Text>Exercicio em progresso, aguarde...</Text>
                    </View>
                </View>
            </Modal>
        }
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
                                    <TouchableOpacity style={[styles.btnLayout, styles.playLayout]} onPress={this.handleSelectClick}>
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
        textAlign: 'center',
        textAlignVertical: 'center'
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

