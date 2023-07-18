import { ChangeEventHandler, FocusEventHandler, useEffect, useState } from "react";
import InputContainer from "./InputContainer";

interface InputProps {
    id: string;
    label?: string;
    type?: 'text' | 'email' | 'password';
    value: string;
    isValid: boolean;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleBlur: FocusEventHandler<HTMLInputElement>;
}

export default function TextInput({ id, label, type, value, isValid, handleChange, handleBlur }: InputProps) {
    const [validationMessage, setValidationMessage] = useState<string | null>(null),
        { length } = value;

    useEffect(() => {
        if (!isValid) {
            setValidationMessage(length === 0 ? `${label} is required!` : `${label} is invalid!`);
        } else {
            setValidationMessage(null);
        }
    }, [label, isValid, length]);

    return (
        <InputContainer>
            <label className="text-sm text-left" htmlFor={id}>{label}</label>
            <input
                className={`${isValid ? 'text-appgray border-blue-500' : 'text-red-500 border-red-500'} font-[500] border-2 rounded-md py-1 px-4 my-2 w-full`}
                id={id}
                name={id}
                value={value}
                type={type || 'text'}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {!isValid && <p className="text-red-500 text-xs text-right">{validationMessage}</p>}
        </InputContainer>
    );
};