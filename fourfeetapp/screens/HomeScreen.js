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
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: <Text style={fontSize = 16}> Home</Text>,
	};



	handleNavPlay = async () => {
		const { navigate } = this.props.navigaton;
		navigate('Play');
	}

	handleNavProfile = async () => {
		const { navigate } = this.props.navigation;
		navigate('Play');
	}

	handleNavRanking = async () => {
		const { navigate } = this.props.navigation;
		navigate('Play');
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}>
					<View style={styles.col}>
						<View style={styles.row}>
							<TouchableOpacity style={[styles.btnLayout, styles.playLayout]} onPress={this.handleNavPlay}>
								<Image style={styles.image} source={require('../assets/icons/play_icon.png')} />
								<Text style={styles.text}>Jogar</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.col}>
							<View style={styles.row}>
								<TouchableOpacity style={[styles.btnLayout, styles.profileLayout]} onPress={this.handleNavProfile}>
									<Image style={styles.image} source={require('../assets/icons/user_icon.png')} />
									<Text style={styles.text}>Perfil</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.btnLayout, styles.profileLayout]} onPress={this.handleNavRanking}>
									<Image style={styles.image} source={require('../assets/icons/ranking_icon.png')} />
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
		paddingTop: 100,
	},

	playLayout: {
		width: 400
	},

	profileLayout: {
		width: 200
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
		marginLeft: 15,
		marginRight: 15
	},

	image: {
		flex: 1,
		height: 100,
		width: 100,
		aspectRatio: 1,
		resizeMode: 'contain',
	}
});
