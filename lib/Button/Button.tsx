import type { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
 
export const Button: React.FC<ButtonProps> = ({ children, ...props } ) => {

  return (
    <button {...props}>{children}</button>
  )
}
