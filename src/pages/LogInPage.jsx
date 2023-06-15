import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import { loginValidationSchema } from "../validationSchemas/login";
const initialValues = { email: "", password: "" };

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helper] = useField(name);
  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helper.setValue(value)}
      {...props}
    />
  );
};
export default function LogInPage() {
  return (
    <Formik validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="password"
              secureTextEntry
            />
            <Button title="Log In" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
}
