import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Vaccinations from './Pages/Vaccinations';
import MyQRCode from './Pages/MyQRCode'
import MyProfile from './Pages/MyProfile';
import Verifiers from './Pages/Verifier/Verifiers';
import VerifierReqs from './Pages/Verifier/VerifierReqs';
import Vaccination from './Pages/Vaccination';

const Stack = createStackNavigator();

function VerifiersNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Verifiers" component={Verifiers} />
      <Stack.Screen name="Verifier Requirements" component={VerifierReqs} />
    </Stack.Navigator>
  );
}

function VaccinationsNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Vaccines" component={Vaccinations} />
      <Stack.Screen name="Vaccine" component={Vaccination} />
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Profile" component={MyProfile} />
        <Tab.Screen name="My Vaccinations" component={VaccinationsNav} />
        <Tab.Screen name="My QR Code" component={MyQRCode} />
        <Tab.Screen name="Verifiers" component={VerifiersNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}