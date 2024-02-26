import React, { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet } from 'react-native'
import ChatList from "../compoments/ChatComponents/ChatList"
import SearchChat from '../compoments/ChatComponents/SearchChat'
import Title from '../compoments/title/Title'
const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout))
}

const ChatScreen = () => {
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		wait(2000).then(() => setRefreshing(false)) // Имитация запроса к API
	}, [])

	return (
		<ScrollView style={styles.chatBlock}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
				/>
			}
		>
			<Title title={'Чаты'} />
			<SearchChat />
			<ChatList />
		</ScrollView>
	)
}

export default ChatScreen

const styles = StyleSheet.create({
	chatBlock: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		display: 'flex',
		gap: 30,
		flex: 1,
	}
})