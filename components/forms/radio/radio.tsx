"use client"

import { VisuallyHidden, Radio as NextRadio } from "@nextui-org/react"
import type { RadioProps } from "@nextui-org/react"
import clsx from "clsx"
import { Controller, useFormContext } from "react-hook-form"

type Props = {
  name: string
} & RadioProps

const Radio: React.FC<Props> = ({ name, children, ...props }) => {
  const form = useFormContext()

  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <NextRadio {...field} {...props}>
            {children}
          </NextRadio>
        )
      }}
      control={form.control}
    />
  )
}

export default Radio
