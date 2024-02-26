import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../contans/Colors'
import CallScreen from '../screens/CallScreen'
import ChatScreen from '../screens/ChatScreen'
import CommunitiesScreen from '../screens/CommunitiesScreen'
import SettingsScreen from '../screens/SettingsScreen'
import StatusScreen from '../screens/StatusScreen'
const Tab = createBottomTabNavigator()
const BottomTabs = () => {
	return (
		<Tab.Navigator screenOptions={{
			labelStyle: {
				fontWeight: '600'
			},
			tabBarStyle: { backgroundColor: '#F6F6F6' },
		}}
			initialRouteName='chat'
		>
			<Tab.Screen name='status' component={StatusScreen}
				options={{
					tabBarLabel: 'Статус',
					tabBarIcon: ({ focused }) => (
						<Icon2 name='circular-graph' size={23} color={focused ? "#007AFF" : '#A8A8A8'} />
					),
					title: false,
					headerLeft: () => {
						return <TouchableOpacity style={styles.statusLeftBlock}>
							<Text numberOfLines={0} style={styles.statusLeftText}>Конфиденциальность</Text>
						</TouchableOpacity>
					}
				}}
			/>
			<Tab.Screen name='call' component={CallScreen}
				options={{
					tabBarLabel: 'Звонки',
					tabBarIcon: ({ focused }) => (
						focused ? <Icon name='call' size={25} color={'#007AFF'} /> : <Icon name='call-outline' size={25} color={'#A8A8A8'} />
					),
					title: false,
					headerLeft: () => {
						return <View style={{ paddingLeft: 15 }}>
							<TouchableOpacity>
								<Text style={styles.callLeftText}>Изменить</Text>
							</TouchableOpacity>
						</View>
					},
					headerRight: () => {
						return <TouchableOpacity style={{ paddingRight: 15 }}>
							<Icon3 name='phone-plus' color={Colors.primary} size={26} />
						</TouchableOpacity>
					}
				}}
			/>
			<Tab.Screen name='communities' component={CommunitiesScreen}
				options={{
					tabBarLabel: 'Сообщества',
					title: false,
					tabBarIcon: ({ focused }) => (
						focused ? <Icon name='people' size={25} color={'#007AFF'} /> : <Icon name='people-outline' size={25} color={'#A8A8A8'} />
					)
				}}
			/>
			<Tab.Screen name='chat' component={ChatScreen}
				options={{
					title: '',
					headerLeft: () => {
						return <TouchableOpacity style={styles.chatLeft}>
							<Icon3 name='dots-horizontal-circle-outline' size={26} color={Colors.primary} />
						</TouchableOpacity>
					},
					headerRight: () => {
						return <View style={styles.chatRight}>
							<TouchableOpacity>
								<Icon name='camera-outline' size={28} color={Colors.primary} />
							</TouchableOpacity>
							<TouchableOpacity>
								<Icon3 name='plus-circle' size={33} color={Colors.primary} />
							</TouchableOpacity>
						</View>
					},

					tabBarLabel: 'Чаты',
					tabBarIcon: ({ focused }) => (
						focused ? <Icon name='chatbubbles' size={25} color={'#007AFF'} /> : <Icon name='chatbubbles-outline' size={25} color={'#A8A8A8'} />
					)
				}}
			/>
			<Tab.Screen name='setting' component={SettingsScreen}
				options={{
					title: false,
					tabBarLabel: 'Настройки',
					tabBarIcon: ({ focused }) => (
						focused ? <Icon name='settings' size={25} color={'#007AFF'} /> : <Icon name='settings-outline' size={25} color={'#A8A8A8'} />
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTabs

const styles = StyleSheet.create({
	chatLeft: {
		paddingLeft: 15
	},
	chatRight: {
		display: 'flex',
		flexDirection: 'row',
		gap: 20,
		paddingRight: 15,
		alignItems: 'center'
	},
	statusLeftText: {
		color: Colors.primary,
		fontSize: 16,
		fontWeight: '400'
	},
	statusLeftBlock: {
		paddingLeft: 15,
		width: 200
	},
	callLeftText: {
		fontSize: 16,
		color: Colors.primary,

	}
})