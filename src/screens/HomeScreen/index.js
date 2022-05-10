import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


//COMPONENTS
import CustomButton from '../../components/CustomButton';

//ASSETS
import styles from './styles';
import logo from '../../assets/images/logo.png'
import apple from '../../assets/images/apple.png'
import facebook from '../../assets/images/fb.png'
import google from '../../assets/images/google.png'

const HomeScreen = props => {

	return (
		<ScrollView>
			<LinearGradient 
				colors={['#f3c442', '#fa7745']} 
				start={{ x: 1, y: 0 }}
				end={{ x: 0.5, y: 0.5 }}
				style={styles.linearGradient}
			>
				<View style={styles.container}>
					<Image
						source={logo}
						style= {styles.logoImg}
					/>
					<Text style={styles.headerTitle}> FoodStyles </Text>
					<Text style={styles.headerText}> Sign in to be able to save your preferences and settings. </Text>
						<View style={styles.signInButtons}>
							<CustomButton
								bgColor
								image={apple}
								text="Sign in with Apple"
							/>
							<CustomButton
								bgColor
								image={facebook}
								text="Sign in with Facebook"
							/>
							<CustomButton
								bgColor
								image={google}
								text="Sign in with Google"
							/>
							<CustomButton
								bgColor
								text="Sign in with Email"
							/>
							<CustomButton
								whiteText
								text="Log in with Email"
							/>
						</View>
						<Text style={styles.footer}>By signing in you accept the General Terms and Privacy Policy</Text>
				</View>
			</LinearGradient>
		</ScrollView>

	);
};

export default HomeScreen;