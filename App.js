import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigate from './src/navigate/Navigate'
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
