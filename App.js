import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vaccinations from './Pages/Vaccinations';
import MyQRCode from './Pages/MyQRCode'
import MyProfile from './Pages/MyProfile';
import VaccinesByVerifier from './Pages/VaccinesByVerifier';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
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
        <Tab.Screen name="My Vaccinations" component={Vaccinations} />
        <Tab.Screen name="My QR Code" component={MyQRCode} />
        <Tab.Screen name="Verifiers" component={VaccinesByVerifier} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}