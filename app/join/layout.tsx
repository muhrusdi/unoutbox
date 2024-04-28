import { Tooltip } from "@nextui-org/tooltip"
import clsx from "clsx"
import { cookies, headers } from "next/headers"
import { Tab } from "./tab"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
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
          <Tab username={unUsername?.value} />
          <div className="pt-10">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
