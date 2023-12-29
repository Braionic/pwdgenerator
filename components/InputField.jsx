import React from "react";
import { Formik } from "formik";
import { View, TextInput, Button, Text } from "react-native";

const InputField = ({ handleGennewpwd, formSchema, values, handleChange }) => (
  <View>
    <TextInput
      name="pwdlen"
      onChangeText={handleChange("pwdlen")}
      value={values.pwdlen}
      keyboardType="numeric"
      style={{ width: 150, height: 40, borderWidth: 1, borderRadius: 5 }}
    />
  </View>
);

export default InputField;
