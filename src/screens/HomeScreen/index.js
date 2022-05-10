import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';


//COMPONENTS

//ASSETS
import styles from './styles';

const HomeScreen = props => {

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.headerTitle}> FoodStyles </Text>
				{/* <TouchableOpacity style={styles.LoginButton}
				>
					<Text style={styles.LoginButtonText}> Login </Text>
				</TouchableOpacity> */}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;