import React, {useState, useEffect} from 'react'

import { Card, CardItem, Button} from 'react-native-elements'

import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    aspectRatio: 1,
    resizeMode: 'contain'
  },
});

const Vaccination = (props) => {

  const {route} = props
  const image = route.params.vaccination.image

  return (
    <View >
      <Card key={route.params.vaccination.id}>
        <Card.Title>{route.params.vaccination.vaccine_name}</Card.Title>
        <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            MFG: {route.params.vaccination.manufacturer}
          </Text>
          <Text style={{marginBottom: 10}}>
            Issued by: {route.params.vaccination.issuer_name}
          </Text>
      </Card>
      <Text>{"\n"}</Text>
      <Card>
        <Card.Title>Vaccination Card Image</Card.Title>
        <Card.Divider/>
          {console.log(route.params.vaccination)}
        <Image
          style={styles.stretch}
          source={{
            uri: image,
          }}
        />
      </Card>
      </View>
  )
}

export default Vaccination
