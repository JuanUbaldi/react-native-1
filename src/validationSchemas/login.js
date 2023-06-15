import * as yup from "yup";
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Debes introducir un E-mail")
    .required("E-mail is required!!"),
  password: yup
    .string()
    .min(5, "too short")
    .max(100, "too large")
    .required("password is required!!"),
});
