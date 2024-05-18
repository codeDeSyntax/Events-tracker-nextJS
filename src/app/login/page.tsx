"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from 'react-hot-toast'

export default function Login() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
     await axios.post("/api/users/login", user);
      console.log('Login successful')
      router.push("/home");
      toast.success("Logged in successful", {
        position: "top-right",
       
      })
      
    } catch (error: any) {
      console.log("Login unsuccessful", error);
    }
  };
  return (
    <div className="flex  flex-col justify-center items-center h-screen bg-gray-200">
      <h2 className="bg-white w-96 text-center font-bold text-gray-700 pt-4">
        Login
      </h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
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
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            type="password"
            placeholder="********"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onLogin}
          >
            Log In
          </button>
        </div>
        <div className="w-full ">
          <Link href="/signup" className="text-[.8rem] text-center text-red-400">
            Go to signup page
          </Link>
        </div>
      </form>
    </div>
   
  );
}
