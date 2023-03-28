import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Third')}>
            <Text>Welcome in Detail Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DetailScreen;