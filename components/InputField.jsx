import React from 'react';
import { Formik } from 'formik';
import { View, TextInput, Button } from 'react-native';

const InputField = ({handlepress, formSchema}) => (
  <View>
    <Formik
      initialValues={{ pwdlen: ''}}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        handlepress(values.pwdlen)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
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
          {errors.pwdlen && touched.email && errors.pwdlen}
        
          <Button title="submit" disabled={isSubmitting} onSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  </View>
);

export default InputField;