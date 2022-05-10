import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

//COMPONENTS

//ASSETS
import styles from './styles';

export const CustomButton = props => {
	let {image, text, bgColor} = props; 

	return (
		<TouchableOpacity 
			style={{...styles.customButton, backgroundColor: bgColor ? 'white' : 'none' }}
		>
			<Image
				source={image}
				style={styles.logoImage}
			/>
			<Text style={styles.loginButtonText}> {text} </Text>
		</TouchableOpacity>
	);
};

export default CustomButton;