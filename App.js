import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import InputField from "./components/InputField";

export default function App() {
  const [isnumber, setIsnumber] = useState(true);
  const [isLowercase, setIslowercase] = useState(true);
  const [isuppercase, setIsuppercase] = useState(false);
  const [schar, setSchar] = useState(true);
  const [myform, setForm] = useState("");
  const [number, setnumber] = useState(0);

  const formSchema = yup.object({
    pwdlen: yup
      .number("this is an input field")
      .required("field is required")
      .min(6, "u need to add a min of 6").max(10, "be calming down, your password is too long"),
  });

  const handleGennewpwd = (bgt) => {
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
    return generatePwd(val, bgt);
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <InputField formSchema={formSchema} handleGennewpwd={handleGennewpwd} />
        <Text>{number}</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
