import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'
import {Card, Button} from 'react-native-elements'

const MyProfile = ({navigation}) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    getUserInfo()
  },[])

  const getUserInfo = async () => {
    let res = await axios.get(`http://localhost:3001/api/users/10`)
    console.log(res.data)
    setUser(res.data)
  }

  const renderUser = () => {
    return(
      <Card key={user.id}>
          <Card.Title>My Profile</Card.Title>
          <Card.Divider/>
          <Card.Title>Name: {user.first_name} {user.last_name}</Card.Title>
            <Text style={{marginBottom: 10}}>
              Email: {user.email}
            </Text>
            <Text style={{marginBottom: 10}}>
              Age: {user.age}
            </Text>
            <Text style={{marginBottom: 10}}>
              Country Origin: {user.country_origin}
            </Text>
        </Card>
    )
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {!user && <Text>My Profile</Text>}
        {user ? renderUser() : <Text>Loading...</Text>}
        <Text>{"\n"}</Text>
        <Button
          title="My Vaccinations"
          type="outline"
          onPress={() => navigation.navigate('My Vaccinations')}
        />
        <Text>{"\n"}</Text>
        <Button
          title="My QR Code"
          type="outline"
          onPress={() => navigation.navigate('My QR Code')}
        />
      </View>
    );
}

export default MyProfile
