import { Tooltip } from "@nextui-org/tooltip"
import { cookies } from "next/headers"
import { FormVerify } from "./form"
import clsx from "clsx"

const Join = () => {
  const unUsername = cookies().get("un-username")

  return (
    <div className="py-4">
      <div className="container max-w-[565px]">
        <div>
          <div className="text-center">
            <div>
              <span className="font-semibold text-xl">Let's make your</span>
            </div>
            <h1 className="text-4xl font-black mt-2">UnOutbox</h1>
          </div>
          <div className="text-center mt-10">
            <h3 className="text-lg">Choose your username</h3>
            <div>
              <ul className="flex space-x-2 mt-4">
                <li className="w-full">
                  <Tooltip
                    size="sm"
                    content="Choose your username"
                    placement="bottom"
                  >
                    <div
                      className={clsx(
                        unUsername ? "bg-gray-600" : "bg-gray-300",
                        "h-2 rounded-full"
                      )}
                    ></div>
                  </Tooltip>
                </li>
                <li className="w-full">
                  <Tooltip
                    size="sm"
                    content="Secure your account"
                    placement="bottom"
                  >
                    <div className="h-2 bg-gray-300 rounded-full"></div>
                  </Tooltip>
                </li>
                <li className="w-full">
                  <Tooltip
                    size="sm"
                    content="Set up your organization"
                    placement="bottom"
                  >
                    <div className="h-2 bg-gray-300 rounded-full"></div>
                  </Tooltip>
                </li>
                <li className="w-full">
                  <Tooltip
                    size="sm"
                    content="Create your profile"
                    placement="bottom"
                  >
                    <div className="h-2 bg-gray-300 rounded-full"></div>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <p>This will be your username across the whole Un ecosystem.</p>
            <p>
              It's yours personally and can join as many organizations as you
              want.
            </p>
          </div>
          <FormVerify />
        </div>
      </div>
    </div>
  )
}

export default Join
