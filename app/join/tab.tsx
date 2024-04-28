"use client"

import { Tooltip } from "@nextui-org/react"
import clsx from "clsx"
import { usePathname } from "next/navigation"

type Props = {
  username?: String
}

export const Tab: React.FC<Props> = ({ username }) => {
  const pathname = usePathname()

  const title = username
    ? "Secure your account " + username
    : "Choose your username"

  return (
    <div className="text-center mt-10">
      <h3 className="text-lg">{title}</h3>
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
                  pathname === "/join" ? "bg-gray-600" : "bg-gray-300",
                  "h-2 rounded-full"
                )}
              ></div>
            </Tooltip>
          </li>
          <li className="w-full">
            <Tooltip size="sm" content="Secure your account" placement="bottom">
              <div
                className={clsx(
                  pathname === "/join/secure" ? "bg-gray-600" : "bg-gray-300",
                  "h-2 rounded-full"
                )}
              ></div>
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
            <Tooltip size="sm" content="Create your profile" placement="bottom">
              <div className="h-2 bg-gray-300 rounded-full"></div>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  )
}
