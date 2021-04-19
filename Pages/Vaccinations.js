import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import axios from 'axios'

const Vaccinations = () => {
  
  const [vaccinations, setVaccinations] = useState(null)

  useEffect(() => {
    getVaccinations()
  },[])

  const getVaccinations = async () => {
    let res = await axios.get(`http://localhost:3001/api/vaccinations/10`)
    console.log(res.data)
    setVaccinations(res.data)
  }

  const renderVaccinations = () => {
    return vaccinations.map(vaccination => {
      return(
        <Card key={vaccination.id}>
          <Card.Title>{vaccination.vaccine_name}</Card.Title>
          <Card.Divider/>
            <Text style={{marginBottom: 10}}>
              Vaccine Info Here
            </Text>
        </Card>
      )
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Vaccinations</Text>
      {vaccinations ? renderVaccinations() : <Text>Loading...</Text>}
    </View>
  )
}

export default Vaccinations
