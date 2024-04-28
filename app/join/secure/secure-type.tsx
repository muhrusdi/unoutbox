"use client"

import { VisuallyHidden, useRadio } from "@nextui-org/react"
import clsx from "clsx"

type Props = {
  value: string
  children: React.ReactNode
}

export const RadioItem: React.FC<Props> = props => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props)

  return (
    <Component
      {...getBaseProps()}
      className={clsx(
        "bg-gray-100 rounded-lg border border-gray-300 p-4 w-full cursor-pointer",
        isSelected && "border-green-500"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  )
}
