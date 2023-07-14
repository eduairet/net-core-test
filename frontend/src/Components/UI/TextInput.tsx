import useInput from "../../Hooks/use-input";
import InputContainer from "./InputContainer";

interface InputProps {
    id: string;
    label?: string;
    type?: 'text' | 'email' | 'password';
}

export default function TextInput({ id, label, type }: InputProps) {
    const { value, handleChange, handleFocus, handleBlur } = useInput();
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