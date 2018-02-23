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

import BackgroundImage from '../../components/BackgroundImage';
import EditForm from '../../components/EditForm';
import Colors from '../../constants/Colors';




export default class EditProfileScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	handleSubmit = async (value) => {
		const { navigate } = this.props.navigation;

		console.log(value.name, value.age, value.gender, value.side)

		let data = {
			name: value.name,
			age: value.age,
			side: value.side,
			gender: value.gender
		}

		await navigate('Profile', { profileData: data });
	}

	render() {
		const { goBack, state } = this.props.navigation;

		return (
			<BackgroundImage>
				<View style={styles.topbar}>
					<View style={styles.leftinfo}>
						<TouchableOpacity onPress={() => { goBack() }} activeOpacity={.6}>
							<Image style={{ width: 45, height: 45 }} source={require('../../assets/icons/home.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.mid}>
					</View>
					<View style={styles.rightinfo}>
						<Text style={styles.title}>Profile Edition</Text>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View style={{ alignItems: 'center' }}>
							<EditForm data={state.params.data} onSubmit={this.handleSubmit} />
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

});

