import { LogBox, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigation from './src/navigation'
import { AppProvider } from './src/context/AppContext'
import { Colors, Fonts } from './src/theme'
import FlashMessage from 'react-native-flash-message'
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <AppProvider>
      <View style={{ flex: 1 }} >
        <StatusBar backgroundColor={Colors.screen} barStyle='dark-content' />
        <Navigation />
        <FlashMessage position="top" titleStyle={styles.flashMessage} />
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({
  flashMessage: {
    fontFamily: Fonts.REGULAR,
    textAlign: "center",
    marginTop: 3,
    fontSize: 13
  }
})


