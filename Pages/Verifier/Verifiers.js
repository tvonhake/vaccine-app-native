import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import Verifier from './Verifier'

const Verifiers = ({navigation}) => {
  
  const [verifiers, setVerifiers] = useState(null)

  useEffect(() => {
    getVerifiers()
  },[])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 20,
      flexBasis: 'auto', 
    },
  });

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
    <View style={[styles.container]}>
      {/* <Text>All Verifiers</Text> */}
      {verifiers ? renderVerifiers() : <Text style={[styles.loader]}>Loading...</Text>}
    </View>
  )
}
export default Verifiers
