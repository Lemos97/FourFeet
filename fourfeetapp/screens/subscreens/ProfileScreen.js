import React from 'react';
import BackgroundImage from '../../components/BackgroundImage'

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



export default class ProfileScreen extends React.Component {
<<<<<<< Updated upstream
    static navigationOptions = {
        header: <Text> Perfil</Text>,
    };

    render() {
        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.text}>Perfil</Text>
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
=======
	static navigationOptions = {
		header: <Text> Perfil</Text>,
	};

	render() {
		return (
			<BackgroundImage>
				<View style={styles.container}>
					<ScrollView>
						<Text style={styles.text}>Perfil</Text>
						<View style={styles.col}>
							{/* 1st row */}
							<View style={[styles.boxes, {width: '100%'}]}>
								<Text style={styles.text}>Perfil</Text>

							</View>
							{/* 2nd row */}
							<View style={styles.row}>
								{/* r2-c1  */}
								<View style={styles.col}>
									{/* r2-c1-r1 */}
									<View style={[styles.boxes, styles.row, {width: '60%'}]}>

									</View>
									{/* r2-c1-r2 */}
									<View style={[styles.boxes, styles.row, {width: '60%'}]}>
\
									</View>
								</View>
								{/* r2-c2 */}
								<View style={styles.row}>

								</View>
							</View>
						</View>
						{/* <View>
                            <Ionicons
                                name={'md-create'}
                                size={25}
                            />
                        </View> */}
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
		justifyContent: 'center',
		alignItems: 'center'
	},

	boxes: {
		height: 60,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: '#4682B4',
	},

	edit_btn: {

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
>>>>>>> Stashed changes
});

