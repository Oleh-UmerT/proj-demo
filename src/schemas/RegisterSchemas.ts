import * as yup from "yup";

export const EmailFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const PasswordFormSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
});

export const PersonalFormSchema = yup.object().shape({
  gender: yup.string().required("gender is required"),
  academic_position: yup.string().required("academic position is required"),
  last_name: yup.string().required("last name is required"),
  first_name: yup.string().required("first name is required"),
  dob: yup.string().required("date of birth is required"),
});

export const PhoneFormSchema = yup.object().shape({
  phone: yup.string().required("phone is required"),
  street: yup.string().required("street is required"),
  house: yup.string().required("house is required"),
  zip: yup.string().required("zip is required"),
  city: yup.string().required("city is required"),
  country: yup.string().required("country is required"),
});

export const DetailsFormSchema = yup.object().shape({
  birth_country: yup.string().required("birth country is required"),
  birth_city: yup.string().required("birth city is required"),
  profession: yup.string().required("profession is required"),
  nationality: yup.string().required("nationality is required"),
  nationality_2: yup.string().required("nationality 2 is required"),
  social_status: yup.string().required("social status 2 is required"),
  us_citizen: yup.boolean().required(""),
  pay_tax_country: yup.string().required("pay tax country is required"),
  ssn: yup.string().required("ssn is required"),
});
