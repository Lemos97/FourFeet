import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button,
	TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { SmoothLine } from 'react-native-pathjs-charts';

import BackgroundImage from '../../components/BackgroundImage'
import Colors from '../../constants/Colors';
import { width, height } from '../../constants/Layout';




export default class RankingScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		this.state = {
			data: [
				[{
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
					"y": 15
				}, {
					"x": 4,
					"y": 21
				}, {
					"x": 5,
					"y": 34
				}],
				[{
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
				}]
			]
		}
	}

	handleMonth = async () => {
		this.setState({
			data: [
				[{
					"x": 0,
					"y": 0
				}, {
					"x": 1,
					"y": 6
				}, {
					"x": 2,
					"y": 9
				}, {
					"x": 3,
					"y": 12
				}, {
					"x": 4,
					"y": 15
				}, {
					"x": 5,
					"y": 18
				}],
				[{
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
					"y": 7
				}, {
					"x": 4,
					"y": 10
				}, {
					"x": 5,
					"y": 13
				}]
			]
		})
	}

	handleWeek = async () => {
		this.setState({
			data: [
				[{
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
					"y": 15
				}, {
					"x": 4,
					"y": 21
				}, {
					"x": 5,
					"y": 34
				}],
				[{
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
				}]
			]
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		const { data } = this.state;

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
				showLines: false,
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
				showLines: false,
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
					<ScrollView >
						<View style={styles.col}>
							<View style={styles.row}>
								<SmoothLine data={data} options={options} xKey='x' yKey='y' />
							</View>
						</View>
						<View style={[styles.row, { justifyContent: "center" }]}>
							<View style={[styles.col, { marginRight: 15 }]}>
								<TouchableOpacity onPress={this.handleWeek}>
									<Icon name={"calendar"} size={45} color={Colors.orange} />
								</TouchableOpacity>
							</View>
							<View style={[styles.col, { marginLeft: 15 }]}>
								<TouchableOpacity onPress={this.handleMonth}>
									<Icon name={"calendar-multiple"} size={45} color={Colors.darkBlue} />
								</TouchableOpacity>
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
	text: {
		color: Colors.darkBlue,
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
