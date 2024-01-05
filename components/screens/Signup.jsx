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
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { object, string, number, date, InferType, min } from "yup";
import { Formik } from "formik";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileimage] = useState("");
  const [error, setError] = useState("");
  const [successmsg, setsuccessmsg] = useState("");
  const [isLoading, setIsloading] = useState(false);

  let newUserSchema = object({
    name: string().required("name is required"),
    password: string()
      .required("password is required")
      .min(6, "must be at least 6 characters long").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    email: string().email().required("email is required"),
    profileImage: string().url().nullable(),
  });

  const handleRegister = (values) => {
    const user = {
      email: values.email.toLowerCase(),
      name: values.name,
      password: values.password,
      profileImage: values.profileImage,
    };
    //setTimeout(() => console.log("waiting"), 3000);
    axios
      .post("http://192.168.0.112:2000/api/register", user)
      .then((data) => {
        console.log(data.data.error && data.data.error);
        if (data.data.error) {
          setIsloading(true);
          setsuccessmsg(data.data.msg);
          setTimeout(() => {
            setIsloading(false);
            setError(data.data.error);
          }, 2000);
        }

        //return navigation.navigate("login");
        if (data.data.msg) {
          setIsloading(true);
          setsuccessmsg(data.data.msg);
          setTimeout(() => {
            setIsloading(false);
            return navigation.navigate("login");
          }, 2000);
        }
      })
      .catch((err) => console.log(`failed: ${err}`));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image
          resizeMode="cover"
          source={{ uri: "https://i.ibb.co/cxkpqfY/My-project-1-3.jpg" }}
          style={{ width: 120, height: 120, borderRadius: 30, marginTop: 60 }}
        />
        {error && (
          <View
            style={{
              backgroundColor: "red",
              padding: 5,
              marginTop: 20,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              {error}
            </Text>
          </View>
        )}

        <KeyboardAvoidingView>
          <Formik
            initialValues={{
              email: "",
              name: "",
              password: "",
              profileImage: "",
            }}
            validationSchema={newUserSchema}
            onSubmit={(values) => handleRegister(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <>
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
                  <View style={{ padding: 10 }}>
                    <Entypo name="user" size={24} color="black" />
                  </View>
                  <TextInput
                    name="name"
                    style={{
                      width: 250,
                      borderLeftWidth: 1,
                      padding: 10,
                      marginLeft: 3,
                      borderColor: "grey",
                    }}
                    value={values.name}
                    placeholder="name"
                    onChangeText={handleChange("name")}
                  />
                </View>
                <Text style={{ color: "red" }}>
                  {errors.name && touched.name && errors.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Entypo name="email" size={24} color="black" />
                  </View>
                  <TextInput
                    name="email"
                    onBlur={handleBlur("email")}
                    style={{
                      width: 250,
                      borderLeftWidth: 1,
                      padding: 10,
                      marginLeft: 3,
                      borderColor: "grey",
                    }}
                    value={values.email}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onkey
                  />
                </View>
                <Text style={{ color: "red" }}>
                  {errors.email && touched.email && errors.email}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Entypo name="lock" size={24} color="black" />
                  </View>
                  <TextInput
                    name="password"
                    onBlur={handleBlur("password")}
                    style={{
                      width: 250,
                      borderLeftWidth: 1,
                      padding: 10,
                      marginLeft: 3,
                      borderColor: "grey",
                    }}
                    secureTextEntry
                    value={values.password}
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                  />
                </View>
                <Text style={{ color: "red" }}>
                  {errors.password && touched.password && errors.password}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Entypo name="image" size={24} color="black" />
                  </View>
                  <TextInput
                    name="profileImage"
                    onBlur={handleBlur("profileImage")}
                    style={{
                      width: 250,
                      borderLeftWidth: 1,
                      padding: 10,
                      marginLeft: 3,
                      borderColor: "grey",
                    }}
                    value={values.profileImage}
                    placeholder="ProfileImage"
                    onChangeText={handleChange("profileImage")}
                  />
                </View>
                <Text style={{ color: "red" }}>
                  {errors.profileImage &&
                    touched.profileImage &&
                    errors.profileImage}
                </Text>
                <Pressable style={{ paddingVertical: 20 }}>
                  <Text style={{ textAlign: "center" }}>Forgot Password</Text>
                </Pressable>

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    padding: 15,
                    backgroundColor: "gray",
                    marginTop: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <Text>Already a User?</Text>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={{ fontWeight: "bold", color: "blue" }}>Sign In</Text>
            </Pressable>
          </View>

          {isLoading && <ActivityIndicator size="large" color="red" />}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
