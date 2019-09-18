import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';


export default class Home extends React.Component{
    render() {
      return (
        <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>
            this is test Component!
          </Text>
          <Button onPress={()=> this.props.navigation.navigate("search")} title="Go to Search"/>
        </View>
      )
    }
}