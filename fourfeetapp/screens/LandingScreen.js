import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { login } from '../api/login';
import RegisterForm from '../components/RegisterForm';
import BackgroundImage from '../components/BackgroundImage';

export default class LandingScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			details: null,
			isRegisted: false
		};
	}

	static navigationOptions = {
		header: null
	};

	handleNav = async () => {
		const { navigate } = this.props.navigation;
		if (this.state.details != null) {
			navigate('Home', this.state.details);
		}
	}


	handleSubmit = async (value) => {
		const { navigate } = this.props.navigation;

		console.log(value.name, value.age, value.gender, value.side)

		const resp = await login({ name: value.name, age: value.age, gender: value.gender, side: value.side })
		console.log(resp)

		if (resp.isSuccess) {
			if (typeof resp == 'object') {
				if (this.state.details != null) {
					this.setState({ details: resp })
				}
			}
			navigate('Home', this.state.details);
		}
	}

	tryLogin = async () => {
		const { navigate } = this.props.navigation;
		const resp = await login({})
		if (resp.isSuccess == true) {
			this.setState({ isRegisted: true });
			this.setState({ details: resp })
			navigate('Home', this.state.details)
		}
		else {
			return false;
		}
	}

	componentWillMount() {
		this.tryLogin()
	}


	render() {
		const { navigate } = this.props.navigation;
		return (
			<BackgroundImage>
				<View style={styles.container}>
					<Image style={styles.image} source={require('../assets/icons/4f_logo.png')} />
					{this.state.isRegisted ?
						<TouchableOpacity style={styles.btnSubmit} onPress={this.handleNav}>
							<Text style={styles.text}>Conecte-se</Text>
						</TouchableOpacity>
						: <RegisterForm onSubmit={this.handleSubmit} />}
				</View>
			</BackgroundImage>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -35,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},

	text: {
		fontSize: 18,
		alignSelf: "center",
		color: '#fff'
	},

	image: {
		height: 75,
		width: 100,
		resizeMode: 'stretch',
	},

	btnSubmit: {
		height: 36,
		width: 200,
		backgroundColor: "#48BBEC",
		borderColor: "#48BBEC",
		borderWidth: 1,
		borderRadius: 8,
		marginTop: 10,
	}
});
