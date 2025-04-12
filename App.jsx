import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StackNavigator from './src/navigation/StackNavigator'

export default function App() {
  return (
    <StackNavigator />
  )
}

const styles = StyleSheet.create({})