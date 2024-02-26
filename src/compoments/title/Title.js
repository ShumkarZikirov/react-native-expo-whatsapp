import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({ title }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export default Title

const styles = StyleSheet.create({
	title: {
		fontSize: 34,
		fontWeight: '700'
	}
})