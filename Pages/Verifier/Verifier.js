import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { Card, CardItem, Button} from 'react-native-elements'

const Verifier = (props) => {

  const {verifier, navigation} = props

  return (
    <Card >
        <Button
          title={verifier.name}
          type="outline"
          onPress={() => {
            navigation.navigate('Verifiers', {
              screen: 'Verifier Requirements',
              params: { verifier: verifier, verifierId: verifier.id }
            })
          }
          }
        />
    </Card>
  )
}

export default Verifier
