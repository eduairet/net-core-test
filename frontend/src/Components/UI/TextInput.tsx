import { ChangeEventHandler, FocusEventHandler } from "react";
import InputContainer from "./InputContainer";

interface InputProps {
    id: string;
    label?: string;
    type?: 'text' | 'email' | 'password';
    value: string;
    isFocused: boolean;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleFocus: FocusEventHandler<HTMLInputElement>;
    handleBlur: FocusEventHandler<HTMLInputElement>;
}

export default function TextInput({ id, label, type, value, handleChange, handleFocus, handleBlur }: InputProps) {
    return (
        <InputContainer>
            <label className="text-sm text-left" htmlFor={id}>{label}</label>
            <input
                className="text-appgray font-[500] border-2 border-blue-500 rounded-md py-1 px-4 my-2 w-full"
                id={id}
                name={id}
                value={value}
                type={type || 'text'}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </InputContainer>
    );
};