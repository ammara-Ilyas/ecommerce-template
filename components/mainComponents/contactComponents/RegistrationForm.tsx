"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <Image
          className="mx-auto h-20 w-auto"
          src="data:image/jpeg;base64,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"
          alt="Workflow"
        />
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
