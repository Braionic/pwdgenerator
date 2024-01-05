import { StatusBar } from "expo-status-bar";
import { useState, createContext, useEffect, useContext } from "react";
import { Keyboard, TextInput } from "react-native";
import { Button } from "react-native";
import uuid from "react-native-uuid";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { SafeAreaView, FlatList } from "react-native";
import { ScrollView } from "react-native";
import InputField from "../InputField";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Savedpasswords from "../Savedpasswords";
import Header from "../Header";
import { UserContext } from "../Authcontext";

const dataContext = createContext();

export default function Home({navigation}) {
  const [isnumber, setIsnumber] = useState(true);
  const [isLowercase, setIslowercase] = useState(true);
  const [isuppercase, setIsuppercase] = useState(true);
  const [schar, setSchar] = useState(false);
  const [myform, setForm] = useState("");
  const [number, setnumber] = useState("");
  const [data, setData] = useState([]);
  const [sliderValue, setSliderValue] = useState(6);

  
  
  const formSchema = yup.object({
    pwdlen: yup
      .number("this is an input field")
      .required("field is required")
      .min(6, "u need to add a min of 6")
      .max(10, "be calming down, your password is too long"),
  });

  const handleGennewpwd = (formikValue) => {
    const num = "0123456789";
    const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lw = "abcdefghijklmnopqrstuvwxyz";
    const spC = "!@#$%^&*()_+";
    let val = "";

    if (isuppercase) {
      val += upp;
    }
    if (isnumber) {
      val += num;
    }
    if (isLowercase) {
      val += lw;
    }

    if (schar) {
      val += spC;
    }
    return generatePwd(val, sliderValue);
  };
  const generatePwd = (pwdstring, txtval) => {
    let pwdvalue = "";
    for (let i = 0; i < txtval; i++) {
      let randomIndex = Math.round(Math.random() * pwdstring.length);
      pwdvalue += pwdstring[randomIndex];
      console.log(pwdvalue);
      //const element = array[i];
    }

    setnumber(pwdvalue);
    return pwdvalue;
  };

  function handleReset() {
    setSchar("");
    setIsuppercase(false);
    setIsnumber(false);
    setnumber("");
    console.log(data);
  }

  function handleSave() {
    setData((oldval) => [
        { id: uuid.v4(), data: number, title: "testing" },
        ...oldval,
      ])
      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem('@savedPasswords', jsonValue);
          console.log(jsonValue)
        } catch (e) {
          // saving error
        }
      };
      storeData(data)
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View>
            <Header />
            <Text style={{ fontSize: 10, marginHorizontal: 20 }}>
              GENERATED PASSWORD
            </Text>
            <View
              style={{
                padding: 15,
                backgroundColor: "grey",
                marginHorizontal: 20,
                borderRadius: 5,
              }}
            >
              <Text>Long press to copy</Text>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "white" }}
              >
                {number}
              </Text>
            </View>
            <View>
              <InputField
                formSchema={formSchema}
                handleGennewpwd={handleGennewpwd}
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
              />
            </View>
            <Text
              style={{ fontSize: 12, marginHorizontal: 20, marginVertical: 5 }}
            >
              SETTINGS:
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15 }}>Include Uppercase</Text>

              <BouncyCheckbox
                fillColor="green"
                unfillColor="#FFFFFF"
                ref={(ref) => (bouncyCheckboxRef = ref)}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{
                  textDecorationLine: "none",
                  color: isuppercase ? "green" : "red",
                }}
                isChecked={isuppercase}
                text={isuppercase ? "Active" : "Not Active"}
                disableBuiltInState
                onPress={() => setIsuppercase(!isuppercase)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15 }}>Include Lowercase?</Text>

              <BouncyCheckbox
                fillColor="green"
                unfillColor="#FFFFFF"
                ref={(ref) => (bouncyCheckboxRef = ref)}
                iconStyle={{ borderColor: isLowercase ? "green" : "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{
                  textDecorationLine: "none",
                  color: isLowercase ? "green" : "red",
                }}
                isChecked={isLowercase}
                text={isLowercase ? "Active" : "Not Active"}
                disableBuiltInState
                //onPress={() => setIslowercase(!isLowercase)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15 }}>Include Special Character</Text>

              <BouncyCheckbox
                fillColor="green"
                unfillColor="#FFFFFF"
                ref={(ref) => (bouncyCheckboxRef = ref)}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{
                  textDecorationLine: "none",
                  color: schar ? "green" : "red",
                }}
                isChecked={schar}
                text={schar ? "Active" : "Not Active"}
                disableBuiltInState
                onPress={() => setSchar(!schar)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <Text style={{ fontSize: 15 }}>Include Number</Text>

              <BouncyCheckbox
                fillColor="green"
                unfillColor="#FFFFFF"
                ref={(ref) => (bouncyCheckboxRef = ref)}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{
                  textDecorationLine: "none",
                  color: isnumber ? "green" : "red",
                }}
                isChecked={isnumber}
                text={isnumber ? "Active" : "Not Active"}
                disableBuiltInState
                onPress={() => setIsnumber(!isnumber)}
              />
            </View>

            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 15,
                  marginHorizontal: 20,
                  borderRadius: 5,
                }}
                onPress={() => handleGennewpwd()}
                // disabled={}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Generate Password
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "grey",
                  padding: 10,
                  marginRight: 5,
                  borderRadius: 5,
                }}
                onPress={handleReset}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Reset Pwd
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "green",
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={handleSave}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Save Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <Savedpasswords data={data} />
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
});

/*
<TouchableOpacity
                      style={{ backgroundColor: "red", padding: 10 }}
                      onPress={handleSubmit}
                      disabled={isSubmitting}
                    >
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Generate Password
                      </Text>
                    </TouchableOpacity>

                    
                    

                    */
