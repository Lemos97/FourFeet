import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button, Alert
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Entypo';
import BackgroundImage from '../../components/BackgroundImage';
import Colors from '../../constants/Colors';




export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentWillMount() {
		const { state } = this.props.navigation;

		console.log(state.params)
		if (state.params !== undefined) {
			Alert.alert(
				null,
				'Dados atualizados com sucesso',
				[{ text: 'Ok', onPress: () => { } },],
				{ cancelable: false },
			);
			this.setState({ data: state.params.profileData })
			try {
				this.props.navigation.dispatch(
					NavigationActions.reset({
						index: 2,
						key: null,
						actions: [
							NavigationActions.navigate({ routeName: 'Landing' }),
							NavigationActions.navigate({ routeName: 'Home' }),
							NavigationActions.navigate({ routeName: 'Profile' })
						]
					})
				);
			} catch (e) {
				console.log(e)
			}
		} else {
			let data = {
				name: "Bruno Lemos",
				gender: "M",
				side: 'Right',
				age: '35'
			}
			this.setState({ data: data })
		}
	}


	render() {
		const { goBack, navigate, state } = this.props.navigation;
		const { data } = this.state;

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
						<Text style={styles.title}>Profile</Text>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View style={{ alignItems: 'center' }}>
							<View style={[styles.row, styles.biggerContains]}>
								<Text style={styles.text}>{data.name}</Text>
							</View>
							<View style={[styles.row]}>
								<View style={[styles.col]}>
									<View style={[styles.row, styles.rowContains]}>
										<Text style={styles.text}>{data.gender == "M" ? "Homem" : "Mulher"}</Text>
									</View>
									<View style={[styles.row, styles.rowContains]}>
										<Text style={styles.text}>{data.side == "Right" ? 'Destro' : data.side == "Left" ? 'Esquerdino' : data.side == "Both" ? 'Ambidestro' : 'Sem dados.'}</Text>
									</View>
								</View>
								<View style={[styles.col, styles.ageContains]}>
									<Text style={styles.text}>{data.age}</Text>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
				<View style={styles.editPen}>
					<TouchableOpacity activeOpacity={.6} onPress={() => navigate('Edit', { data: data })}>
						{/* <Icon name={'edit'}
							size={25}
							style={{ marginBottom: -3 }}
							color={Colors.orange} /> */}
						<Text>Edit</Text>
					</TouchableOpacity>
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
		alignItems: 'center',
		width: '100%',
		height: '80%'
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
	biggerContains: {
		width: 225,
		backgroundColor: Colors.darkBlue,
		height: 40,
		marginTop: 5,
		justifyContent: 'flex-end',
		padding: 7,
		borderRadius: 2,
	},
	ageContains: {
		borderRadius: 2,
		width: 80,
		height: 82.5,
		backgroundColor: Colors.darkBlue,
		marginLeft: 5,
		marginTop: 2.5,
		justifyContent: 'flex-end',
		paddingLeft: 30
	},
	rowContains: {
		borderRadius: 2,
		width: 140,
		marginTop: 2.5,
		height: 40,
		backgroundColor: Colors.darkBlue,
		justifyContent: 'flex-end',
		padding: 7
	},
	text: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	col: {
		flexDirection: 'column',
		alignSelf: 'center'
	},
	row: {
		flexDirection: 'row',
		alignSelf: 'center'
	},
	editPen: {
		alignItems: 'flex-end',
		width: '100%',
		backgroundColor: '#fff',
		padding: 25
	}
});

