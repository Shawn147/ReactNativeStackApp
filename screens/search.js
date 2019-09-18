import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';


export default class Search extends React.Component{
    render() {
      return (
        <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>
            this is Search!
          </Text>
          <Button onPress={()=> this.props.navigation.navigate("add")} title="Go to Add"/>
        </View>
      )
    }
}