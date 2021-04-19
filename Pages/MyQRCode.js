import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';


const Vaccinations = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QRCode value="user_id: 1" />
      <Text>{"\n"}</Text>
      <Text>Present this QR Code for Verifier to Scan</Text>
    </View>
  )
}

export default Vaccinations
