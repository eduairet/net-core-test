import { ChangeEventHandler } from "react";
import InputContainer from "./InputContainer";

interface SelectInputProps {
    id: string;
    label: string;
    options: {
        value: number;
        label: string;
    }[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function SelectInput({ id, label, options, onChange }: SelectInputProps) {
    return (
        <InputContainer>
            <label className="text-sm text-left" htmlFor={id}>{label}</label>
            <select
                id={id}
                name={id}
                onChange={onChange}
                className="text-appgray border-blue-500  font-[500] border-2 rounded-md py-1 px-4 my-2 w-full"
            >
                {options.map((option) => (
                    <option key={`${id}-option-${option.value}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </InputContainer>
    );
}