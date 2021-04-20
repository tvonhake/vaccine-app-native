import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native';
import axios from 'axios'
import Verifier from './Verifier'

const Verifiers = ({navigation}) => {
  
  const [verifiers, setVerifiers] = useState(null)

  useEffect(() => {
    getVerifiers()
  },[])

  const getVerifiers = async () => {
    let res = await axios.get(`http://localhost:3001/api/users/verifiers`)
    setVerifiers(res.data)
  }

  const renderVerifiers = () => {
    return verifiers.map(verifier => {
      return(
        <Verifier key={verifier.id} verifier={verifier} navigation={navigation}/>
      )
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>All Verifiers</Text>
      {verifiers ? renderVerifiers() : <Text>Loading...</Text>}
    </View>
  )
}
export default Verifiers
