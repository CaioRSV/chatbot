"use client";
import React from 'react'

import { useSession } from "next-auth/react"

import { signIn } from "@/auth";


const Test = () => {
    const { data: session } = useSession();
  return (
    <div>
        <p>teste</p>
        <p>{session?.user?.name}</p>
    </div>
  )
}

export default Test