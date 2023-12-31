<>
    Formik
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
                      formSchema={formSchema}
                      handleGennewpwd={handleGennewpwd}
                      handleChange={handleChange}
                      values={values}
                      sliderValue={sliderValue}
                      setSliderValue={setSliderValue}
                    />
                    <Text style={{ color: "red" }}>
                      {errors.pwdlen && touched.pwdlen && errors.pwdlen}
                    </Text>
                    <TouchableOpacity
                style={{ backgroundColor: "red", padding: 10 }}
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
                )}
              </Formik>


<TextInput
      name="pwdlen"
      onChangeText={handleChange("pwdlen")}
      value={values.pwdlen}
      keyboardType="numeric"
      style={{ width: '90%', height: 40, borderWidth: 1, borderRadius: 5 , marginHorizontal: 20}}
      
    />
    </>