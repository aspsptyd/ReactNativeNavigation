import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
            <Text>Hi, Home Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;