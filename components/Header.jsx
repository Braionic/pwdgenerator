import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { Avatar } from 'react-native-elements';
import { UserContext } from './Authcontext';
export default function Header() {

  const {userData} = useContext(UserContext)
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, marginHorizontal: 10}}>
      <Text style={{fontSize: 20}}>{userData.name}</Text>
      <View>
      <Avatar source={
              userData.profileImage
                ? { uri: userData.profileImage }
                : {uri: "https://i.ibb.co/fQ65jDN/cover-jpg-C7-BB7385-C5-CE-46-D3-9-B2-B-0-E1-F0806-E7-C8-Default.jpg"}
            } rounded />
      </View>

    </View>
  )
}