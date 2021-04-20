import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button} from 'react-native-elements'
import axios from 'axios'

const Vaccinations = ({navigation}) => {
  
  const [vaccinations, setVaccinations] = useState(null)

  useEffect(() => {
    getVaccinations()
  },[])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 20,
      flexBasis: 'auto', 
    },
    title: {
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 'auto',
    },
    loader: {
      textAlign: 'center', 
      fontSize: 15,
      marginTop: 0,
      width: 'auto',
      paddingBottom: 20
  }
  });

  const getVaccinations = async () => {
    let res = await axios.get(`http://localhost:3001/api/vaccinations/10`)
    setVaccinations(res.data)
  }

  const renderVaccinations = () => {
    return vaccinations.map(vaccination => {
      return(
        <Button
          style={{paddingBottom: 20}}
          key={vaccination.id}
          title={vaccination.vaccine_name}
          type="solid"
          onPress={() => {
            navigation.navigate('My Vaccinations', {
              screen: 'Vaccine',
              params: { vaccination: vaccination}
            })
          }
          }
        />
      )
    })
  }

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      {/* <Text style={[styles.title]}>My Vaccinations</Text> */}
      {vaccinations ? renderVaccinations() : <Text style={[styles.loader]}>Loading...</Text>}
    </View>
  )
}

export default Vaccinations
