import { ReactNode } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export {};
