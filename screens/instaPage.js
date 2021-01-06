import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AppHeader from '../AppHeader'

export default class Insta extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.text}>Instagram</Text>
      </View>
          )
    }
}
const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:'30',
  }
})