import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import { Card} from 'react-native-elements'
import axios from 'axios'
import Verifier from './Verifier';

const VerifierReqs = (props) => {
  
  const [vaccinations, setVaccinations] = useState(null)

  const {route} = props
  const [verifier, setVerifier] = useState([])

  const normalizeVerif = () => {
    setVerifier(route.params.verifier)
 }
  

  useEffect(() => {
    setVerifier(route.params.verifier)
    getVaccinations(verifier)
  },[])



  const getVaccinations = async () => {
    try{
      let res = await axios.get(`http://localhost:3001/api/required_vaccines/${route.params.verifier.id}`)
      setVaccinations(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderVaccinations = () => {
    if(vaccinations.length >= 1){
      return vaccinations.map(vaccination => {
        return(
          // <Card key={vaccination.id}>
          //   <Card.Title>{vaccination.vaccine_name}</Card.Title>
          //   <Card.Divider/>
          //     <Text style={{marginBottom: 10}}>
          //       Vaccine Info Here
          //     </Text>
          // </Card>
          <Card key={vaccination.required_vaccines_id}>
            <Text>
              {vaccination.vaccine_name}
            </Text>
          </Card>
        )
      })
    }else{
      return(
        <Card>
          <Text>No Required Vaccines</Text>
        </Card>
      )
    } 
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{verifier.name} Required Vaccinations</Text>
      {vaccinations ? renderVaccinations() : <Text>Loading...</Text>}
    </View>
  )
}

export default VerifierReqs
