import axios from "../../api/axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useSignState } from "../../api/signState";
import {
  accountCreated,
  invalidPassword,
  serverResponseError,
  userNameTaken,
} from "../toasters/toasts";

export const SignupForm = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            id="username"
            type="text"
            autoComplete="off"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <input
            id="password"
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div className="mb-6">
          <input
            id="confirm_pwd"
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <button className="inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
          Sign Up
        </button>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="my-2 inline-block text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        >
          Login
        </button>
      </form>
    </>
  );
};
