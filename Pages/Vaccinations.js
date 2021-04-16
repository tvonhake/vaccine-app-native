import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import axios from 'axios'

const Vaccinations = () => {

  useEffect(() => {
    getVaccinations()
  },[])

  const getVaccinations = async () => {
    let res = await axios.get(`http://localhost:3001/api/uservaccinations/10`)
    console.log(res.data)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vaccines</Text>
    </View>
  )
}

export default Vaccinations
