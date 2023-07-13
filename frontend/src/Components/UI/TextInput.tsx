import useInput from "../Hooks/use-input";

interface InputProps {
    id: string;
    label?: string;
    type?: 'text' | 'email' | 'password';
}

export default function TextInput({ id, label, type }: InputProps) {
    const { value, handleChange, handleFocus, handleBlur } = useInput();
    return (
        <div className="container">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                value={value}
                type={type || 'text'}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};