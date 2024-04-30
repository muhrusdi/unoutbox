import { Chip } from "@nextui-org/chip"
import { RadioGroup } from "@nextui-org/radio"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { RadioItem } from "./secure-type"
import { Fingerprint, KeyRound } from "lucide-react"
import { SecureForm } from "./form"

const Secure = () => {
  const unUsername = cookies().get("un-username")

  if (!unUsername) {
    redirect("/join")
  }

  return (
    <div>
      <div>
        <p>How do you want to secure your account?</p>
        <SecureForm />
      </div>
    </div>
  )
}

export default Secure
