import { ReactNode } from "react"

interface FormProps {
    children: ReactNode;
    onSubmit: () => void;
}

export default function Form({ children, onSubmit }: FormProps) {
    return <form onSubmit={onSubmit}>{children}</form>
}