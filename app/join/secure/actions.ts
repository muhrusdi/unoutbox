"use server"

import { secureSchema } from "@/types"
import { wait } from "@/utils"

export const createSecureAction = async (prev: any, formData: FormData) => {
  await wait(3000)
  const secureType = formData.get("secureType") as string
  const validatedField = secureSchema.safeParse({
    secureType,
  })

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
    }
  }

  return {
    data: secureType,
  }
}
