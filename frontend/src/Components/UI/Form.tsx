import { FormEventHandler, ReactNode } from "react";

interface FormProps {
    children: ReactNode;
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, onSubmit }: FormProps) {
    return <form onSubmit={onSubmit}>{children}</form>
}