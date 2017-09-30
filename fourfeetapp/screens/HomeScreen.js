import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage'
import { StackNavigator, NavigationActions } from 'react-navigation';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	// componentDidMount() {
	// 	const resetAction = NavigationActions.reset({
	// 		index: 0,
	// 		actions: [
	// 			NavigationActions.navigate({ routeName: 'Home' }),
	// 		]
	// 	})
	// 	this.props.navigation.dispatch(resetAction)
	// }

	handleNavPlay = async () => {
		const { navigate } = this.props.navigation;
		navigate('Play');
	}

	handleNavProfile = async () => {
		const { navigate } = this.props.navigation;
		navigate('Profile');
	}

	handleNavRanking = async () => {
		const { navigate } = this.props.navigation;
		navigate('Ranking');
	}

	render() {
		return (
			<BackgroundImage>
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.col}>
							<Image style={styles.logo} source={require('../assets/icons/4f_logo.png')} />
						</View>
						<View style={styles.col}>
							<View style={styles.row}>
								<TouchableOpacity activeOpacity={0.8} style={[styles.btnLayout, styles.playLayout]} onPress={this.handleNavPlay}>
									<View>
										<Image style={styles.image} source={require('../assets/icons/play_icon.png')} />
										<Text style={styles.text}>Jogar</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View style={styles.col}>
								<View style={styles.row}>
									<TouchableOpacity activeOpacity={0.8} style={[styles.btnLayout, styles.profileLayout]} onPress={this.handleNavProfile}>
										<View>
											<Image style={styles.image} source={require('../assets/icons/user_icon.png')} />
											<Text style={styles.text}>Perfil</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity activeOpacity={0.8} style={[styles.btnLayout, styles.profileLayout]} onPress={this.handleNavRanking}>
										<View>
											<Image style={styles.image} source={require('../assets/icons/ranking_icon.png')} />
											<Text style={styles.text}>Ranking</Text>
										</View>
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

	},

	playLayout: {
		width: '98%',
		backgroundColor: '#4682B4',
	},

	profileLayout: {
		width: '49%',
	},

	btnLayout: {
		borderColor: '#ffffff',
		borderWidth: 2,
		backgroundColor: '#48BBEC',
		alignItems: 'center',
		padding: 5,
		height: 150,
	},

	text: {
		color: 'white',
		textAlign: 'center'
	},

	col: {
		flexDirection: 'column',
		alignItems: 'center',
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	logo: {
		height: 75,
		width: 100,
		resizeMode: 'stretch',
		marginBottom: '20%',
		marginTop: 25,
	},

	image: {
		flex: 1,
		height: 100,
		width: 100,
		aspectRatio: 1,
		resizeMode: 'contain',
	}
});
