"use server"

import { usernameSchema } from "@/types"
import { wait } from "@/utils"
import { cookies } from "next/headers"

export const usernameVerifyAction = async (prev: any, formData: FormData) => {
  await wait(2000)
  const username = formData.get("username") as string
  const validatedFields = usernameSchema.safeParse({
    username,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  if (username.includes("muhrusdi")) {
    return {
      errors: {
        username: {
          message: "Username is exist",
        },
      },
    }
  }

  return {
    data: {
      username,
    },
  }
}

export const createUsernameAction = async (prev: any, formData: FormData) => {
  await wait(2000)
  const username = formData.get("username")
  const validatedFields = usernameSchema.safeParse({
    username,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  cookies().set("un-username", username as string)

  return {
    data: {
      username,
    },
  }
}
