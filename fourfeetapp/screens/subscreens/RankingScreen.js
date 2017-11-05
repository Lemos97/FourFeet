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
// import { Radar } from 'react-native-pathjs-charts'

import BackgroundImage from '../../components/BackgroundImage'
import Colors from '../../constants/Colors';




export default class RankingScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		const { goBack } = this.props.navigation;

		return (
			<BackgroundImage>
				<View style={styles.topbar}>
					<View style={styles.leftinfo}>
						<TouchableOpacity onPress={() => { goBack() }} activeOpacity={.6}>
							<Image style={{ width: 50, height: 50, }} source={require('../../assets/icons/home.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.mid}>
					</View>
					<View style={styles.rightinfo}>
						<Text style={styles.title}>Ranking</Text>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						{/* <Radar data={data} options={options} /> */}
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
		fontSize: 16
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

