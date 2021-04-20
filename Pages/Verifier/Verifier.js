import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { Card, CardItem, Button} from 'react-native-elements'

const Verifier = (props) => {

  const {verifier, navigation} = props

  return (
        <Button
          title={verifier.name}
          type="solid"
          style={{paddingBottom: 20}}
          onPress={() => {
            navigation.navigate('Verifiers', {
              screen: 'Verifier Requirements',
              params: { verifier: verifier, verifierId: verifier.id }
            })
          }
          }
        />
  )
}

export default Verifier
