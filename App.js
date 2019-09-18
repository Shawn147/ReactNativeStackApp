import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';
import Home from "./screens/home";
import Search from "./screens/search";
import Add from "./screens/add";
import Profile from "./screens/profile"


import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";


class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      img : require("./assets/axiom.png"),
      }
    this.btnpress = this.btnpress.bind(this)
  }

    btnpress(){
      if (this.state.username == "Admin" && this.state.password == "Admin"){
        console.log("UserName: ",this.state.username,"Password: ",this.state.password)
        this.props.navigation.navigate("home")
      }
      else{
        alert("Username/Password Mismatch !Please try again");
        this.setState({err : "!!! UserID or Password is incorrect !!!"})
      }
     
    }
  render(){    
    return (
      <View style={styles.container}>
        <View style={styles.cont1}>
       
        <Image
            
           source={this.state.img}
            style={{position : "absolute",height: "30%", width : "100%"}}
            />
          </View>


        <View style={styles.cont2}>
        <Image source={require("./assets/user.jpg")} style={{height : 50,width : 50}}>
          </Image> 

          <TextInput
          defaultValue={this.state.username}
          onChangeText={ Text => this.setState({username : Text})}
          style={styles.inp}
          >
          </TextInput>
          
          <Image source={require("./assets/pass.png")} style={{height : 50,width : 50}}>
          </Image> 
          
          <TextInput
          secureTextEntry={true}
          defaultValue={this.state.password}
          onChangeText={ Text => this.setState({password : Text})}
          style={styles.inp}
          >
          </TextInput>
          <View style={{ alignItems: 'center',}}>
          <Text
          style={{color : "red"}}
          >{this.state.err}</Text>
          <Button title={"Log In"} onPress={this.btnpress}/>
          
          </View>
          

        </View>
      </View>
          
    );
  }}
  

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent : "center",
      backgroundColor : "dimgray"
      
    },

    cont1 :{
      color : "gray",
      flex  : 4,
      justifyContent : "center",
      backgroundColor : "aliceblue"
      
    },
    cont2 :{
      justifyContent : "space-evenly",
      flex : 6,
      backgroundColor : "aliceblue",
      alignItems: 'center',
      
    },

    inp : {
      backgroundColor : "darkorange",
      color : "navy", 
      height : "15%",
      width : "80%",
      color : "white",
      textAlign : "center",
    },
    btn : {
      
    }
  });



  

  
  
const AppNavigator = createStackNavigator({
      log : Login,
      home : Home,
      search : Search,
      add : Add,
      profile : Profile

  });
  export default createAppContainer(AppNavigator);