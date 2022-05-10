import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	customButton: {
		borderRadius: 50,
        width: '100%',
        paddingVertical: 17,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
	},
    loginButtonText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#434343',
    },
    logoImage: {
        width: 15,
        resizeMode: 'contain',
        marginRight: 5,
    }
});