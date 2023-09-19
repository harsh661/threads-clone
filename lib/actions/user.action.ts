"use server"

import { connectDB } from "../mongoose"
import User from "../models/user.model"
import { revalidatePath } from "next/cache"

interface Params {
  userId: string
  name: string
  image: string
  bio: string
  path: string
}

export async function updateUser({
  userId,
  name,
  image,
  bio,
  path,
}: Params) {
  try {
    connectDB()
    await User.findOneAndUpdate(
      { id: userId },
      {
        name,
        image,
        bio,
      },
      { upsert: true }
    )
  
    if (path === "/profile/edit") {
      revalidatePath(path)
    }
  } catch (error) {
    throw new Error('Something went wrong' + error)
  }
}

export async function fetchUser(userId: string) {
  try {
    connectDB()
    return await User.findOne({ id: userId })
  } catch (error) {
    throw new Error('Something went wrong' + error)
  }
}
