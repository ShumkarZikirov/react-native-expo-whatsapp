import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../contans/Colors'

const NoStatus = () => {
	return (
		<View style={styles.block}>
			<Text style={styles.title}>Обновления вашего статуса защищены <Text style={styles.text}>сквозным шифрованием</Text></Text>
		</View>
	)
}

export default NoStatus

const styles = StyleSheet.create({
	title: {
		color: 'gray',
		width: '90%',
		fontSize: 12,
		textAlign: 'center'
	},
	text: {
		color: Colors.primary
	},
	block: {
		marginTop: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})