import { ReactNode } from "react";

interface InputContainerProps {
    children: ReactNode
}

export default function InputContainer({ children }: InputContainerProps) {
    return <div className="container mx-auto flex flex-col w-full">{children}</div>
}