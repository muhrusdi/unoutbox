import { Chip } from "@nextui-org/chip"
import { RadioGroup } from "@nextui-org/radio"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { RadioItem } from "./secure-type"
import { Fingerprint, KeyRound } from "lucide-react"

const Secure = () => {
  const unUsername = cookies().get("un-username")

  if (!unUsername) {
    redirect("/join")
  }

  return (
    <div>
      <div>
        <p>How do you want to secure your account?</p>
        <RadioGroup
          orientation="horizontal"
          classNames={{
            base: "mt-5",
            wrapper: "flex-nowrap gap-3",
          }}
        >
          <RadioItem value="passkey">
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
          </RadioItem>
          <RadioItem value="password">
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
          </RadioItem>
        </RadioGroup>
        <div className="mt-10">
          <h4 className="font-bold">What are passkeys?</h4>
          <p className="mt-1">
            Passkeys are the new replacement for passwords, designed to give you
            access to an app in an easier and more secure way.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Secure
