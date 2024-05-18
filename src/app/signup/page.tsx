"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  // Sign up logic
  const onSignUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signed up succesfully", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <h2 className="w-96 text-center font-bold text-gray-700 py-5 bg-white">
        Signup
      </h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={user.username}
            type="text"
            placeholder="Username"
            onChange={(e) => {
              e.preventDefault();
              setUser({
                ...user,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            value={user.email}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            value={user.password}
            type="password"
            placeholder="********"
            onChange={(e) => {
              e.preventDefault();
              setUser({
                ...user,
                password: e.target.value,
              });
              
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onSignUp();
              toast.success('logged in successfully')
            }}
          >
            Sign Up
          </button>
        </div>
        <div>
          <a href="/login" className="text-[0.8rem] text-red-300 text-center">
            Go to login
          </a>
        </div>
      </form>
    </div>
    // <div className="w-full flex flex-col justify-center items-center h-[100vh]">
    //   <div className="flex flex-col h-[60%] bg-green-500 w-[24%] p-3 justify-center items-center shadow-md rounded-md">
    //     <h1 className="text-black text-center p-2">
    //       {isLoading ? "Processing" : "Signup"}
    //     </h1>
    //     <div className="flex flex-col p-3 gap-8 w-full">
    //       <hr />
    //       <div className="w-[90%] flex justify-center items-center mx-auto">
    //         <input
    //           className="p-2 border border-gray text-gray-500 rounded-md focus:outline-none focus:border-gray-400 text-[12px] w-[100%]"
    //           type="text"
    //           placeholder="Username"
    //           id="username"
    //           value={user.username}
    //           onChange={(e) => setUser({ ...user, username: e.target.value })}
    //         />
    //       </div>
    //       <div className="flex-row w-[90%] flex justify-center items-center mx-auto">
    //         <input
    //           className="p-2 border border-gray rounded-md focus:outline-none focus:border-gray-400 text-gray-500 text-[12px] w-[100%]"
    //           type="email"
    //           placeholder="Email"
    //           id="email"
    //           value={user.email}
    //           onChange={(e) => setUser({ ...user, email: e.target.value })}
    //         />
    //       </div>
    //       <div className="flex-row w-[90%] flex justify-center items-center mx-auto">
    //         <input
    //           className="p-2 border border-gray rounded-md focus:outline-none focus:border-gray-400 text-gray-500 text-[12px] w-[100%]"
    //           type="password"
    //           placeholder="Password"
    //           id="password" // Corrected input id
    //           value={user.password}
    //           onChange={(e) => setUser({ ...user, password: e.target.value })}
    //         />
    //       </div>
    //     </div>
    //     <button
    //       className="p-2 border border-gray-100 w-[40%] hover:bg-gray-300 hover:text-black duration-200 hover:rounded-md focus:outline-none "
    //       onClick={onSignUp}
    //     >
    //       {buttonDisabled ? "Fill all fields" : "Signup"}
    //     </button>
    //     <Link href="/login" className="text-[12px] pt-4 text-black">
    //       Visit login page here
    //     </Link>
    //   </div>
    // </div>
  );
}
