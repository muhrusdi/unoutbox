"use client"

import { Button, Chip, RadioGroup, cn } from "@nextui-org/react"
import { Fingerprint, Info, KeyRound } from "lucide-react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { secureSchema } from "@/types"
import { Radio } from "@/components/forms/radio"
import { useActionState } from "react"
import { createSecureAction } from "./actions"
import { Input } from "@/components/forms/input"
import { PasskeyInfo } from "./passkey-info"

export const SecureForm = () => {
  const [state, action, isPending] = useActionState(createSecureAction, null)
  const methods = useForm<z.infer<typeof secureSchema>>()

  const handleSubmit: SubmitHandler<z.infer<typeof secureSchema>> = data => {
    console.log(data)
    const formData = new FormData()
    // formData.append("secureType", data.secureType)
    // action(formData)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <RadioGroup
          orientation="horizontal"
          classNames={{
            base: "mt-5",
            wrapper: "flex-nowrap space-x-3",
          }}
        >
          <Radio
            name="secureType"
            value="passkey"
            classNames={{
              base: cn(
                "bg-gray-100 rounded-lg border border-gray-300 py-4 w-full max-w-full px-0 cursor-pointer -ml-0",
                "data-[selected=true]:border-green-500 [&>div:last-of-type]:w-full [&>span]:hidden"
              ),
            }}
          >
            <div className="text-center">
              <div className="flex justify-center text-gray-600">
                <Fingerprint size="44px" />
              </div>
              <h4 className="font-bold mt-4">Passkey</h4>
              <p className="mt-2">Fingerprint, Face ID, etc</p>
              <div className="mt-3">
                <Chip color="success" className="text-white">
                  Most secure
                </Chip>
              </div>
            </div>
          </Radio>
          <Radio
            name="secureType"
            value="password"
            classNames={{
              base: cn(
                "bg-gray-100 rounded-lg border border-gray-300 py-4 w-full max-w-full px-0 cursor-pointer -ml-0",
                "data-[selected=true]:border-green-500 [&>div:last-of-type]:w-full [&>span]:hidden"
              ),
            }}
          >
            <div className="text-center">
              <div className="flex justify-center text-gray-600">
                <KeyRound size="44px" />
              </div>
              <h4 className="font-bold mt-4">Password</h4>
              <p className="mt-2">Alphanumeric</p>
              <div className="mt-3">
                <Chip color="warning" className="text-white">
                  Less secure
                </Chip>
              </div>
            </div>
          </Radio>
        </RadioGroup>
        <div className="pt-10">
          {methods.watch("secureType") === "passkey" ? (
            <PasskeyInfo />
          ) : (
            <div>
              <div>
                <Input
                  label="Password"
                  labelPlacement="outside"
                  placeholder=" "
                  name="password"
                  type="password"
                />
              </div>
              <div className="pt-4">
                <Input
                  label="Confirm"
                  labelPlacement="outside"
                  placeholder=" "
                  name="confirm"
                  type="password"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-8">
          <Button type="submit" fullWidth>
            Submit
          </Button>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>
              Tip: If you have any issues during this process, reach out to our
              support team
            </p>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
