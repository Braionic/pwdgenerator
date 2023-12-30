import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Keyboard, TextInput } from "react-native";
import { Button } from "react-native";
import uuid from "react-native-uuid";
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
import InputField from "./components/InputField";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Savedpasswords from "./components/Savedpasswords";

export default function App() {
  const [isnumber, setIsnumber] = useState(true);
  const [isLowercase, setIslowercase] = useState(true);
  const [isuppercase, setIsuppercase] = useState(true);
  const [schar, setSchar] = useState(false);
  const [myform, setForm] = useState("");
  const [number, setnumber] = useState("");
  const [data, setData] = useState([]);

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
    return generatePwd(val, formikValue);
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

    console.log(data);
  }

  function handleSave() {}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginVertical: 30,
              backgroundColor: "green",
              marginHorizontal: 30,
            }}
          >
            Password Generator
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ paddingVertical: 10, fontSize: 18 }}>
              Password length
            </Text>
            <Formik
              initialValues={{ pwdlen: "" }}
              validationSchema={formSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                handleGennewpwd(values.pwdlen);
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <View>
                  <InputField
                    style={styles.input}
                    formSchema={formSchema}
                    handleGennewpwd={handleGennewpwd}
                    handleChange={handleChange}
                    values={values}
                  />
                  <Text style={{ color: "red" }}>
                    {errors.pwdlen && touched.pwdlen && errors.pwdlen}
                  </Text>

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
                </View>
              )}
            </Formik>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Include Uppercase</Text>

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
            <Text style={{ fontSize: 18 }}>Include Lowercase?</Text>

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
              onPress={() => setIslowercase(!isLowercase)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 18 }}>Include Special Character</Text>

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
            <Text style={{ fontSize: 18 }}>Include Number</Text>

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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "grey", padding: 10, marginRight: 5 }}
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
              style={{ backgroundColor: "green", padding: 10 }}
              onPress={() =>
                setData((oldval) => [
                  { id: uuid.v4(), data: number, title: "testing" },
                  ...oldval,
                ])
              }
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
          <View
            style={{
              padding: 20,
              backgroundColor: "grey",
              marginHorizontal: 20,
              borderRadius: 5,
            }}
          >
            <Text>Long press to copy</Text>
            <Text style={{ fontSize: 25, textAlign: "center", color: "white" }}>
              {number}
            </Text>
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
  container: {
  
  },
});
