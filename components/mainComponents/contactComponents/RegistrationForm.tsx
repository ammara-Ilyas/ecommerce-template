"use client";
import React, { useState } from "react";
import Link from "next/link";
import { contactInfoSchema } from "./widgets/contactInfoSchema";
import { useFormik } from "formik";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
/////////////redux
import { useDispatch } from "react-redux";
// import { addToRgisteredList } from "@/redux/slice/contactSlice";
const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const contactInitialData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  const formik = useFormik({
    initialValues: contactInitialData,
    validationSchema: contactInfoSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);

      //   dispatch(addToRgisteredList(values));
      formik.resetForm();
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-20 w-auto" alt="Workflow" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <Link
            href="/contact/login"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            &nbsp; login to your account
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
                <span className="text-red-400">*</span>{" "}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
                <span className="text-red-400">*</span>{" "}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1234567890"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
                <span className="text-red-400">*</span>{" "}
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
                <span className="text-red-400">*</span>{" "}
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password_confirmation}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.password_confirmation &&
                formik.errors.password_confirmation ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password_confirmation}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
