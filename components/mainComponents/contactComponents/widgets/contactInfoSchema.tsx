import * as Yup from "yup";
import { object, string, number, date, InferType } from "yup";
export let contactInfoSchema = object({
  name: string().required("Name is required").min(3),
  email: string().email().required("Email is required"),
  phone: number().positive().integer().min(11),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});
