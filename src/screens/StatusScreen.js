import React, { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet } from 'react-native'
import MyStatus from '../compoments/statusComponent/MyStatus'
import NoStatus from '../compoments/statusComponent/NoStatus'
import Title from '../compoments/title/Title'

const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout))
}
const StatusScreen = () => {
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
			<Title title={'Статус'} />
			<MyStatus />
			<NoStatus />
		</ScrollView>
	)
}

export default StatusScreen

const styles = StyleSheet.create({
	chatBlock: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		display: 'flex',
		flex: 1,

	}
})