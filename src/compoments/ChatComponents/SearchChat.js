import React from 'react'
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../contans/Colors'
const screenWidth = Dimensions.get('window').width
const SearchChat = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.blockInput}>
				<TextInput style={styles.input} placeholder='Поиск' placeholderTextColor={'#989898'} />
				<Icon style={styles.icon} name='search' size={19} color={'#8E8E93'} />
			</View>
			<TouchableOpacity style={styles.filter}>
				<Icon style={styles.icon} name='filter' size={19} color={Colors.primary} />
			</TouchableOpacity>
		</View>
	)
}

export default SearchChat

const styles = StyleSheet.create({
	blockInput: {
		position: 'relative',
		flex: 1
	},
	input: {
		backgroundColor: Colors.gray,
		height: 35,
		borderRadius: 10,
		paddingLeft: 30,
		fontSize: 15,

	},
	icon: {
		position: 'absolute',
		top: '23%',
		left: 5
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'stretch',
		gap: 10,
		marginVertical: 10,
	},
	filter: {
		width: 30
	}
})