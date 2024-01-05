import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../Authcontext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
const {setIsloggedin, logindata} = useContext(UserContext)

  const handleSignin = () => {
    const signinObj = {
      email: email.toLowerCase(),
      password: password,
    };
    console.log("i was clicked");
    axios
      .post("http://192.168.0.112:2000/api/signin", signinObj)
      .then((data) => {
        if (data.data.msg) {
          setPassword('')
          return setError(data.data.msg);
        } else {
          console.log(data.data);
          AsyncStorage.setItem("loginjwt", data.data.token)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            })
            AsyncStorage.setItem("userData", JSON.stringify(data.data.data))
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            })
            
            logindata()
          setIsloggedin(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={{ uri: "https://i.ibb.co/cxkpqfY/My-project-1-3.jpg" }}
          style={{ width: 150, height: 150, borderRadius: 30, marginTop: 100 }}
        />
        {error && <Text style={{ color: "black" }}>{error}</Text>}
        <KeyboardAvoidingView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <View style={{ padding: 15 }}>
              <Entypo name="email" size={24} color="black" />
            </View>
            <TextInput
              name="email"
              style={{
                width: 250,
                borderLeftWidth: 1,
                padding: 20,
                marginLeft: 3,
                borderColor: "grey",
              }}
              value={email}
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <View style={{ padding: 15 }}>
              <Entypo name="lock" size={24} color="black" />
            </View>
            <TextInput
              name="password"
              style={{
                width: 250,
                borderLeftWidth: 1,
                padding: 20,
                marginLeft: 3,
                borderColor: "grey",
              }}
              secureTextEntry
              value={password}
              placeholder="Password"
              onChangeText={(e) => setPassword(e)}
            />
          </View>

          <Pressable style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: "center" }}>Forgot Password</Text>
          </Pressable>

          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: "gray",
              marginTop: 10,
              borderRadius: 20,
            }}
            onPress={handleSignin}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Text>Not a User?</Text>
            <Pressable onPress={() => navigation.navigate("signup")}>
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                Join Now
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
