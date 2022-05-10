import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

//COMPONENTS

//ASSETS
import styles from './styles';

export const CustomButton = props => {
	let {image, text, whiteText, bgColor} = props; 

	return (
		<TouchableOpacity 
			style={{...styles.customButton, backgroundColor: bgColor ? 'white' : 'none' }}
		>
			{image ? 
				<Image
					source={image}
					style={styles.logoImage}
				/>
				: null
			}
			<Text style={{...styles.loginButtonText, color: whiteText ? 'white' : '#434343'}}> {text} </Text>
		</TouchableOpacity>
	);
};

export default CustomButton;