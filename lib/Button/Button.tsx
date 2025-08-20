import type { ReactNode } from "react"

type ButtonProps = {
  children?: ReactNode
}
 
export const Button: React.FC<ButtonProps> = ({ children } ): ReactNode => {

  return (
    <button>{children}</button>
  )
}
