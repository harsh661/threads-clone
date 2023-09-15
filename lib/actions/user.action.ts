"use server"

import mongoose from "mongoose"
import { connectDB } from "../mongoose"
import User from "../models/user.model"
import { revalidatePath } from "next/cache"

interface Params {
  userId: string
  email: string
  name: string
  image: string
  bio: string
  path: string
}

export async function updateUser({
  userId,
  email,
  name,
  image,
  bio,
  path,
}: Params) {
  connectDB()
  await User.findOneAndUpdate(
    { id: userId },
    {
      email,
      name,
      image,
      bio,
    },
    { upsert: true }
  )

  if (path === "/profile/edit") {
    revalidatePath(path)
  }
}