import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';


export default class Profile extends React.Component{
    render() {
      return (
        <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>
            this is profile!
          </Text>
          <Button onPress={()=> this.props.navigation.push("log")} title="Go to Login"/>
        </View>
      )
    }
}