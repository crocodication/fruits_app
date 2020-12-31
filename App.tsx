import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './sources/screens/home'
import Detail from './sources/screens/detail'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'Home'
          component = {Home}
          options = {{
            title: 'Home'
          }}
        />
        
        <Stack.Screen
          name = 'Detail'
          component = {Detail}
          options = {{
            title: 'Detail'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}