interface BodyContainerProps {
    children: React.ReactNode;
}

export default function BodyContainer({ children }: BodyContainerProps): JSX.Element {
    return (
        <div className="container mx-auto flex flex-wrap justify-center gap-[1rem] mt-[2rem]">
            {children}
        </div>
    );
}
