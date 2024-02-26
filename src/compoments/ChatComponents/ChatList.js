import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { chat } from "../../arrays/chat"



const ChatList = () => {


    return (
        <View style={styles.wrapper}>
            <FlatList
                data={chat}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.main}>
                        <Image source={item.user.img} />
                        <View style={styles.block}>
                            <View>
                                <Text style={styles.title}>{item.user.name}</Text>
                                <Text style={styles.text}>{item.lastMessage.text}</Text>
                            </View>
                            <View style={styles.dateBlock}>
                                <Text style={styles.date}>{item.lastMessage.date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
export default ChatList
const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        marginVertical: 5
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flex: 1
    },
    dateBlock: {
        justifyContent: 'flex-end'
    },
    title: {
        fontWeight: '600',
        fontSize: 16
    },
    text: {
        color: '#8E8E93'
    },
    date: {
        color: '#8E8E93'
    }
})