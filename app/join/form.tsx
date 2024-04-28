"use client"
import { Input } from "@/components/forms/input"
import { Button, Checkbox, Tooltip } from "@nextui-org/react"
import { createUsernameAction, usernameVerifyAction } from "./actions"
import { useActionState, useEffect, useRef } from "react"
import { Info } from "lucide-react"
import debounce from "lodash.debounce"
import {
  FieldErrors,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { usernameSchema } from "@/types"
import { z } from "zod"

export const FormVerify = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [verifyState, verifyAction, isVerifyPending] = useActionState(
    usernameVerifyAction,
    null
  )
  const [createState, createAction, isCreatePending] = useActionState(
    createUsernameAction,
    null
  )

  const methods = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    errors: verifyState?.errors as FieldErrors<z.infer<typeof usernameSchema>>,
  })

  const watchDebounce = debounce(async () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }, 1000)

  useEffect(() => {
    const subscription = methods.watch((value, { name, type }) => {
      if (name === "username") {
        watchDebounce()
      }
    })
    return () => subscription.unsubscribe()
  }, [methods.watch])

  const handleVerify: SubmitHandler<
    z.infer<typeof usernameSchema>
  > = async data => {
    const formData = new FormData()
    formData.append("username", data.username)
    verifyAction(formData)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("username", methods.getValues("username"))
    createAction(formData)
  }

  return (
    <div className="mt-10">
      <FormProvider {...methods}>
        <form ref={formRef} onSubmit={methods.handleSubmit(handleVerify)}>
          <div>
            <Input
              name="username"
              label="Username"
              labelPlacement="outside"
              variant="bordered"
              placeholder=" "
              description={isVerifyPending ? "Verifying..." : ""}
              endContent={
                <Tooltip
                  content="Can only contain letters and number"
                  placement="bottom"
                  size="sm"
                >
                  <Info size={14} />
                </Tooltip>
              }
            />
          </div>
        </form>
      </FormProvider>
      <div className="mt-5">
        <Checkbox {...methods.register("tnc")}>
          <span className="text-sm text-gray-600">
            I agree to the UnInbox Terms of Service and Privacy Policy.
          </span>
        </Checkbox>
      </div>
      <div className="mt-4">
        <Button
          color="primary"
          type="button"
          onPress={handleSubmit}
          isDisabled={
            !!methods.formState.errors?.username?.message ||
            !methods.watch("tnc") ||
            isVerifyPending ||
            isCreatePending
          }
        >
          {isCreatePending ? "Loading..." : "Submit"}
        </Button>
      </div>
    </div>
  )
}
