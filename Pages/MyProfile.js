import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import axios from 'axios'
import {Card, Button} from 'react-native-elements'

const MyProfile = ({navigation}) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    getUserInfo()
  },[])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 40,
      flexBasis: 'auto', 
    },
    title: {
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 'auto',
        paddingBottom: 20
    },
    loader: {
      textAlign: 'center', 
      fontSize: 15,
      marginTop: 0,
      width: 'auto',
      paddingBottom: 20
  }
  });

  const getUserInfo = async () => {
    let res = await axios.get(`http://localhost:3001/api/users/10`)
    setUser(res.data)
  }

  const renderUser = () => {
    return(
      <Card key={user.id}>
          <Card.Title>Name: {user.first_name} {user.last_name}</Card.Title>
          <Card.Divider/>
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
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <Text style={[styles.title]}>My Profile</Text>
        {user ? renderUser() : <Text style={[styles.loader]}>Loading...</Text>}
        <Button
          title="My Vaccinations"
          type="solid"
          style={{paddingBottom: 20, marginTop: 20}}
          onPress={() => navigation.navigate('My Vaccinations')}
        />
        <Button
          title="My QR Code"
          type="solid"
          style={{paddingBottom: 20}}
          onPress={() => navigation.navigate('My QR Code')}
        />
        <Button
          title="Verifiers"
          type="solid"
          style={{paddingBottom: 20}}
          onPress={() => navigation.navigate('All Verifiers')}
        />
      </View>
    );
}

export default MyProfile
