import { Tooltip } from "@nextui-org/tooltip"
import { cookies } from "next/headers"
import { FormVerify } from "./form"
import clsx from "clsx"
import { redirect } from "next/navigation"

const Join = () => {
  const unUsername = cookies().get("un-username")

  if (unUsername) {
    redirect("/join/secure")
  }

  return (
    <div>
      <div className="text-center">
        <p>This will be your username across the whole Un ecosystem.</p>
        <p>
          It's yours personally and can join as many organizations as you want.
        </p>
      </div>
      <FormVerify />
    </div>
  )
}

export default Join
