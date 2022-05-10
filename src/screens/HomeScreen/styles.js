import {StyleSheet} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

export default StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingTop: 70,
		paddingBottom: 50,
		paddingHorizontal: 50,
	},
	container: {
		width: '100%',
		alignItems: 'center',
	},
	logoImg: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
	},
	signInButtons: {
		width: '100%',
		paddingHorizontal: 18,
	},
	headerTitle: {
		color: 'white',
		// fontFamily: 'ProximaNovaAlt-Bold',
		fontWeight: '900',
		fontSize: 30,
	},
	headerText: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		paddingVertical: 30,
	},
	footer: {
		color: 'white',
		fontSize: 14,
		textAlign: 'center',
		opacity: 0.8,
		paddingHorizontal: 35,
	}
});