import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../contans/Colors'
const MyStatus = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.imgBlock}>
				<Image style={styles.img} source={require('../../../assets/image/anrew.jpg')} />
				<Icon2 style={styles.icon} name='pluscircle' color={Colors.primary} size={18} />
			</View>
			<View style={styles.textBlock}>
				<Text style={styles.title}>Мой Статус</Text>
				<Text style={styles.text}>Добавить в статус</Text>
			</View>
			<View style={styles.iconBLock}>
				<TouchableOpacity style={styles.btn}>
					<Icon name='camera' color={Colors.primary} size={20} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn}>
					<Icon name='pencil' color={Colors.primary} size={20} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default MyStatus

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		borderColor: Colors.gray,
		alignItems: 'center',
		borderWidth: 1.5,
		padding: 10,
		borderRadius: 10,
		gap: 10,
		marginTop: 15
	},
	img: {
	},
	textBlock: {
		gap: 3,
		flex: 2
	},
	iconBLock: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,

	},
	title: {
		fontSize: 15,
		fontWeight: '700'
	},
	text: {
		color: 'gray'
	},
	btn: {
		width: 35,
		height: 35,
		backgroundColor: Colors.gray,
		borderRadius: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	imgBlock: {
		position: 'relative'
	},
	icon: {
		position: 'absolute',
		bottom: 0,
		right: 0
	}
})