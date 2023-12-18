import React from 'react';
import { Formik } from 'formik';
import { View, TextInput, Button, Text } from 'react-native';

const InputField = ({handleGennewpwd, formSchema}) => (
  <View>
    <Formik
      initialValues={{ pwdlen: ''}}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        handleGennewpwd(values.pwdlen)
        setSubmitting(false)
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
        
          <TextInput
            name='pwdlen'
            onChangeText={handleChange('pwdlen')}
            value={values.pwdlen}
            keyboardType='numeric'
            style={{width: 80, height: 40, borderWidth: 1}}
          />
          <Text>
          {errors.pwdlen && touched.pwdlen && errors.pwdlen}
          </Text>
          <Button title="submit" disabled={isSubmitting} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  </View>
);

export default InputField;