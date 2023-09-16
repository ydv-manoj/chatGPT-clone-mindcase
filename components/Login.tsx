"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from 'next/image';
import chatgptimg from '../chatgptimg.png'

type Props = {};

function Login({}: Props) {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src={chatgptimg}
        alt="logo"
        className="w-96"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl border-gray-700"
      >
        Sign In to use ChatGpt
      </button>
    </div>
  );
}

export default Login;
