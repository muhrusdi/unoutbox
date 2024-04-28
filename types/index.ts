import React, { SyntheticEvent } from "react"
import { z } from "zod"

export type RootLayoutType = {
  children: React.ReactNode
}

export type ErrorPageType = {
  error: Error
  reset: () => void
}

export type RecordType = {
  [key: string]: string
}

export type UseFormHook<FormState> = {
  formState: FormState
  isLoading: boolean
  formAction: (payload: FormData) => void
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
})

export const usernameSchema = z.object({
  username: z
    .string()
    .refine(
      val => /^[A-Za-z0-9_]+$/.test(val),
      "Chould only contain letters and numbers"
    ),
  tnc: z.boolean().optional(),
})
