import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { Card, CardItem, Button} from 'react-native-elements'

const Vaccination = (props) => {

  const {route} = props

  return (
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
  )
}

export default Vaccination
