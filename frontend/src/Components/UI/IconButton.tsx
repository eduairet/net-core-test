import { ReactNode } from 'react';

interface IconButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export default function IconButton({
    children,
    onClick,
}: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className="rounded-full bg-white text-blue-600 w-8 h-8 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
        >
            {children}
        </button>
    );
}