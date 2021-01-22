import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: "",
      two: "",
      three: "",
      four: "",
    };
  }

  render() {
    return (
      <View style={styles.container0}>
        <View >
        <Text style={styles.Text}>Enter the OTP</Text>
        </View>
          <View style={styles.container1}>
          <TextInput
            maxLength={1}
            style={styles.input}
            name="one"
            value={this.state.one}
            onChangeText={(e) => {
              this.setState({ one: e });
            }}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            name="two"
            value={this.state.two}
            onChangeText={(e) => {
              this.setState({ two: e });
            }}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            name="three"
            value={this.state.three}
            onChangeText={(e) => {
              this.setState({ three: e });
            }}
          />
          <TextInput
            maxLength={1}
            style={styles.input}
            name="four"
            value={this.state.four}
            onChangeText={(e) => {
              this.setState({ four: e });
            }}
          />
          </View>
        <View>
          <Button style={styles.btn} title="Verify" onPress ={()=>{
           alert('verified')
    }}/>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  Text: {
    // position: "absolute",
    fontWeight: "600",
    fontSize: 50,
    marginTop: 150,
    marginLeft:43
  },
  container0: {
    flex: 1,
    flexDirection: "column"
  },
  container1: {
    flex: 0.3,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  btn:{
    width:10
  },
  input: {
    // position:"relative",
    backgroundColor: "#f5f4f2",
    textAlign: "center",
    fontWeight: "600",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    height: 55,
    width: "10%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  submit: {
    position:"relative",
    backgroundColor: "#f5f4f2",
    textAlign: "center",
    fontWeight: "600",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    height: 55,
    width: "30%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  }
});
