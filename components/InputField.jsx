import React from "react";
import { Formik } from "formik";
import { View, TextInput, Button, Text } from "react-native";
import Slider from '@react-native-community/slider';

const InputField = ({ handleGennewpwd, formSchema, sliderValue, setSliderValue }) => (
  <View>
    
    <Text style={{paddingVertical: 5, fontSize: 12, paddingHorizontal: 20, marginTop: 5}}>LENGTH: {sliderValue}</Text>
     <Slider
     style={{
      marginHorizontal: 20,
      backgroundColor: 'green',
      marginVertical: 5
    }}
     name="pwdlen"
          maximumValue={32}
          minimumValue={6}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
  </View>
);

export default InputField;
