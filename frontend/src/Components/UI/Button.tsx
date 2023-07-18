import { ReactNode } from "react"

interface ButtonClasses {
    outline?: string
    solid?: string
}

interface ButtonProps {
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
    className?: string
    btnStyle?: 'outline' | 'solid'
    onClick: () => void
}

const classes: ButtonClasses = {
    outline: 'border border-blue-600 hover:enabled:bg-blue-700 hover:enabled:text-white',
    solid: 'bg-blue-600 hover:enabled:bg-blue-700 text-white'
} 

export default function Button({
    children,
    type,
    disabled,
    className,
    btnStyle,
    onClick,
}: ButtonProps) {
    return (
        <button
            type={type || "button"}
            className={`${classes[btnStyle || 'solid']} py-2 px-4 rounded w-[5rem] transition-color disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`.trim()}
            disabled={disabled || false}
            onClick={onClick}
        >
            {children}
        </button>
    )
}