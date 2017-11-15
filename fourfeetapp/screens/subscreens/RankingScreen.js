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
import { SmoothLine } from 'react-native-pathjs-charts';

import BackgroundImage from '../../components/BackgroundImage'
import Colors from '../../constants/Colors';




export default class RankingScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		const { navigate } = this.props.navigation;
		let data = [
			[{
				"x": -10,
				"y": -1000
			}, {
				"x": -9,
				"y": -729
			}, {
				"x": -8,
				"y": -512
			}, {
				"x": -7,
				"y": -343
			}, {
				"x": -6,
				"y": -216
			}, {
				"x": -5,
				"y": -125
			}, {
				"x": -4,
				"y": -64
			}, {
				"x": -3,
				"y": -27
			}, {
				"x": -2,
				"y": -8
			}, {
				"x": -1,
				"y": -1
			}, {
				"x": 0,
				"y": 0
			}, {
				"x": 1,
				"y": 1
			}, {
				"x": 2,
				"y": 8
			}, {
				"x": 3,
				"y": 27
			}, {
				"x": 4,
				"y": 64
			}, {
				"x": 5,
				"y": 125
			}, {
				"x": 6,
				"y": 216
			}, {
				"x": 7,
				"y": 343
			}, {
				"x": 8,
				"y": 512
			}, {
				"x": 9,
				"y": 729
			}, {
				"x": 10,
				"y": 1000
			}],
			[{
				"x": -10,
				"y": 100
			}, {
				"x": -9,
				"y": 81
			}, {
				"x": -8,
				"y": 64
			}, {
				"x": -7,
				"y": 49
			}, {
				"x": -6,
				"y": 36
			}, {
				"x": -5,
				"y": 25
			}, {
				"x": -4,
				"y": 16
			}, {
				"x": -3,
				"y": 9
			}, {
				"x": -2,
				"y": 4
			}, {
				"x": -1,
				"y": 1
			}, {
				"x": 0,
				"y": 0
			}, {
				"x": 1,
				"y": 1
			}, {
				"x": 2,
				"y": 4
			}, {
				"x": 3,
				"y": 9
			}, {
				"x": 4,
				"y": 16
			}, {
				"x": 5,
				"y": 25
			}, {
				"x": 6,
				"y": 36
			}, {
				"x": 7,
				"y": 49
			}, {
				"x": 8,
				"y": 64
			}, {
				"x": 9,
				"y": 81
			}, {
				"x": 10,
				"y": 100
			}]
		]
		let options = {
			width: 280,
			height: 280,
			color: '#2980B9',
			margin: {
				top: 20,
				left: 45,
				bottom: 25,
				right: 20
			},
			animate: {
				type: 'delayed',
				duration: 200
			},
			axisX: {
				showAxis: true,
				showLines: true,
				showLabels: true,
				showTicks: true,
				zeroAxis: false,
				orient: 'bottom',
				label: {
					fontFamily: 'Arial',
					fontSize: 10,
					fontWeight: true,
					fill: '#34495E'
				}
			},
			axisY: {
				showAxis: true,
				showLines: true,
				showLabels: true,
				showTicks: true,
				zeroAxis: false,
				orient: 'left',
				label: {
					fontFamily: 'Arial',
					fontSize: 10,
					fontWeight: true,
					fill: '#34495E'
				}
			}
		}

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
						<Text style={styles.title}>Ranking</Text>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<SmoothLine data={data} options={options} xKey='x' yKey='y' />
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
