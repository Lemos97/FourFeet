import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View, Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';



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
		header: null
	};

	handleProgressive = async () => {
		this.setState({ ongoingModal: true });
		// const resp = await progressiveExercise({ progressive: "yes" })

		// if (resp.isSuccess) {
		//     this.setState({ ongoingModal: false });
		// }
		setInterval(() => {
			this.setState({ ongoingModal: false });
		}, 1000)
	}

	handleSelectClick = async () => {
		this.setState({ selectorModal: true });

		setInterval(() => {
			this.setState({ selectorModal: false });
		}, 1000)
	}

	componentDidUpdate(_, prevState) {

		if (this.state.ongoingModal != prevState.ongoingModal) {
			Alert.alert(
				'Exercicio a decorrer',
				'Exercicio em progresso, aguarde...',
				[{
					text: 'Fechar', onPress: () => {
						if (this.state.ongoingModal == false) {
							Alert.alert(
								'Exercicio terminado', null)
						} else {
							Alert.alert(
								'Exercicio ainda não terminado', null, [], { cancelable: !this.state.ongoingModal })
						}
					}, style: 'cancel'
				},],
				{ cancelable: false },
			);
		}

		if (this.state.selectorModal != prevState.selectorModal) {
			Alert.alert(
				'Exercicio a decorrer',
				'Exercicio em progresso, aguarde...',
				[{
					text: 'Fechar', onPress: () => {
						if (this.state.selectorModal == false) {
							Alert.alert(null,
								'Exercicio terminado')
						} else {
							Alert.alert(null, 'Exercicio ainda não terminado', [], { cancelable: !this.state.selectorModal })
						}
					}, style: 'cancel'
				},],
				{ cancelable: false },
			);
		}
	}


	render() {
		const { goBack } = this.props.navigation;

		return (
			<BackgroundImage>
				<View style={styles.topbar}>
					<View style={styles.leftinfo}>
						<TouchableOpacity onPress={() => { navigate('Home') }} activeOpacity={.6}>
							<Image style={{ width: 45, height: 45 }} source={require('../../assets/icons/home.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.mid}>
					</View>
					<View style={styles.rightinfo}>
						<Text style={styles.title}>Jogar</Text>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.col}>
							<View style={styles.row}>
								<TouchableOpacity style={[styles.btnLayout, styles.playLayout, { marginBottom: 20 }]} onPress={this.handleProgressive} activeOpacity={.6}>
									<Image style={styles.image} source={require('../../assets/icons/progressive_play.png')} />
									<Text style={styles.text}>Gradual ( Default )</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.col}>
								<View style={styles.row}>
									<TouchableOpacity style={[styles.btnLayout, styles.playLayout]} onPress={this.handleSelectClick} activeOpacity={.6}>
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
	topbar: {
		height: 75,
		width: '100%',
		flexDirection: 'row',
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		padding: 10
	},
	title: {
		color: Colors.darkBlue,
		fontSize: 25,
		textAlign: 'right',
		textAlignVertical: 'center',
		fontWeight: 'bold'
	},
	leftinfo: {
		alignSelf: 'flex-start',
		width: '15%',
	},
	mid: {
		borderBottomColor: Colors.lightBlue,
		width: '5%',
		marginLeft: 5,
		marginRight: 5,
		borderBottomWidth: 4,
	},
	rightinfo: {
		borderBottomColor: Colors.darkBlue,
		width: '70%',
		borderBottomWidth: 4,
	},
	playLayout: {
		width: 150,
		height: 150
	},
	btnLayout: {
		borderColor: '#ffffff',
		borderWidth: 2,
		backgroundColor: Colors.darkBlue,
		alignItems: 'center',
		padding: 5,
		height: 75,
	},
	text: {
		color: '#fff',
		fontSize: 16,
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

