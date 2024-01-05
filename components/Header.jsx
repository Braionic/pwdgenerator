import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { Avatar } from 'react-native-elements';
import { UserContext } from './Authcontext';
export default function Header() {

  const {userData} = useContext(UserContext)
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, marginHorizontal: 10}}>
      <Text style={{fontSize: 20}}>{userData.name}</Text>
      <View>
      <Avatar source={require('../assets/favicon.png')} rounded />
      </View>

    </View>
  )
}