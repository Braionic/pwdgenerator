import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements';
export default function Header() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, marginHorizontal: 10}}>
      <Text style={{fontSize: 20}}>Generate Password</Text>
      <View>
      <Avatar source={require('../assets/favicon.png')} rounded />
      </View>

    </View>
  )
}