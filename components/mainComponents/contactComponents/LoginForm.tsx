"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "./Type";
import { useSelector } from "react-redux";
const LoginForm = () => {
  const registeredList: User[] = useSelector(
    (state: { contact: { registeredList: User[] } }) =>
      state.contact.registeredList
  );

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<number>();
  const [error, setError] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Check if email exists in registeredList
    const user = registeredList.find((user) => user.email === email);

    if (!user) {
      setError("Email not found. Please register first.");
      return;
    }

    // Check if password matches
    if (parseInt(user.password) !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    console.log("Login successful!");
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src="data:image/jpeg;base64,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"
            alt="Login"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md  bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not register?
            <Link
              href="/contact/registration"
              className="font-semibold leading-6  text-blue-600"
            >
              &nbsp; Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
