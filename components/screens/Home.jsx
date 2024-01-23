import { StatusBar } from "expo-status-bar";
import { useState, createContext, useEffect, useContext } from "react";
import { Keyboard, TextInput } from "react-native";
import { Button } from "react-native";
import uuid from "react-native-uuid";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

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
import axios from "axios";
import Clipboard from "@react-native-community/clipboard";
import DropDownPicker from "react-native-dropdown-picker";

//const dataContext = createContext();

export default function Home({ navigation }) {
  const { userData, setIsSaved } = useContext(UserContext);
  const [isnumber, setIsnumber] = useState(true);
  const [isLowercase, setIslowercase] = useState(true);
  const [isuppercase, setIsuppercase] = useState(true);
  const [schar, setSchar] = useState(false);
  const [myform, setForm] = useState("");
  const [number, setnumber] = useState("");
  const [data, setData] = useState([]);
  const [sliderValue, setSliderValue] = useState(6);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  //show toast
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Password",
      text2: "Saved 👋",
    });
  };

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
      //console.log(pwdvalue);
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
  }

  function handleSave() {
    setData((oldval) => [
      { id: uuid.v4(), data: number, title: "testing" },
      ...oldval,
    ]);
    const dataObj = {
      platform: `Password ${data.length + 1}`,
      password: number,
      id: uuid.v4(),
      uid: userData._id,
    };
    const storeData = async (value) => {
      try {
        //const jsonValue = JSON.stringify(data);
        //await AsyncStorage.setItem("@savedPasswords", jsonValue);
        //console.log(jsonValue);
        const mypwd = await axios.post(
          "http://192.168.0.112:2000/api/savepassword",
          dataObj
        );
        if (number && mypwd) {
          //console.log(mypwd);
          showToast();
        }
      } catch (e) {
        // saving error
        console.log(e);
      }
    };
    storeData(data);
    setIsSaved((oldval) => {
      return !oldval;
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <SafeAreaView style={styles.container}>
          <View>
            <Header />
            <Text style={{ fontSize: 10, marginHorizontal: 20 }}>
              GENERATED PASSWORD
            </Text>
            <View
              style={{
                padding: 5,
                backgroundColor: "grey",
                marginHorizontal: 20,
                borderRadius: 5,
              }}
            >
              <Text>Long press to copy</Text>
              <Text
                style={{ fontSize: 25, textAlign: "center", color: "white" }}
                selectable
              >
                {number}
              </Text>
            </View>
            <View
              style={{ paddingHorizontal: 15, marginTop: 10, paddingBottom: 30 }}
            >
              <InputField />
            </View>
            <View>
              <TextInput
        style={styles.input}
       
        value={number}
        placeholder="useless placeholder"
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

                padding: 5,
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
                padding: 5,
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
                padding: 5,
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
                padding: 5,
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
                  marginTop: 15,
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
                  backgroundColor: "pink",
                  padding: 10,
                  marginRight: 5,
                  borderRadius: 5,
                }}
                onPress={handleReset}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Reset Password
                </Text>
              </TouchableOpacity>
              {number ? (
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
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 5,
                    opacity: 0.5,
                  }}
                  onPress={handleSave}
                  disabled
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
              )}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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
