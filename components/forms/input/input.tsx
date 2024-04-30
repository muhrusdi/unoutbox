"use client"

import { Controller, useFormContext } from "react-hook-form"
import { Input as NextInput } from "@nextui-org/react"
import type { InputProps } from "@nextui-org/react"

type Props = {
  name: string
  errors?: Record<string, any>
} & InputProps

const Input: React.FC<Props> = ({ name, ...props }) => {
  const form = useFormContext()
  const error = form?.formState?.errors[name]
  const errorMessage = error?.message

  return form?.control ? (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <NextInput
            {...props}
            {...field}
            variant="bordered"
            isInvalid={Boolean(errorMessage)}
            errorMessage={errorMessage as string}
          />
        )
      }}
      control={form.control}
    />
  ) : (
    <NextInput {...props} />
  )
}

export default Input
