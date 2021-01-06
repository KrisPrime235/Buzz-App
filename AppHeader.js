import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class AppHeader extends React.Component{
    render(){
        return(
            <View >
                <Text style={styles.Heading}>BuzzApp</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Heading:{
        marginBottom:100,
        backgroundColor:'blue',
        height:50,
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold'
    }
})