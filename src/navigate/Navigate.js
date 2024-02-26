import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import BottomTabs from './BottomTabs'

const Stack = createStackNavigator()
const Navigate = () => {

	return (
		<Stack.Navigator initialRouteName='Root' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Root' component={BottomTabs} />


		</Stack.Navigator>
	)
}

export default Navigate

const styles = StyleSheet.create({})