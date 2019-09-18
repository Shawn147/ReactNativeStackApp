import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';


export default class Add extends React.Component{
    render() {
      return (
        <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>
            this is add!
          </Text>
          <Button onPress={()=> this.props.navigation.navigate("profile")} title="Go to Profile"/>
        </View>
      )
    }
}