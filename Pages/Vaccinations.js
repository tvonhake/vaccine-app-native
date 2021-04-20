import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { Card, Button} from 'react-native-elements'
import axios from 'axios'

const Vaccinations = ({navigation}) => {
  
  const [vaccinations, setVaccinations] = useState(null)

  useEffect(() => {
    getVaccinations()
  },[])

  const getVaccinations = async () => {
    let res = await axios.get(`http://localhost:3001/api/vaccinations/10`)
    setVaccinations(res.data)
  }

  const renderVaccinations = () => {
    return vaccinations.map(vaccination => {
      return(
        <Card key={vaccination.id}>
        <Button
          title={vaccination.vaccine_name}
          type="outline"
          onPress={() => {
            navigation.navigate('My Vaccinations', {
              screen: 'Vaccine',
              params: { vaccination: vaccination}
            })
          }
          }
        />
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
