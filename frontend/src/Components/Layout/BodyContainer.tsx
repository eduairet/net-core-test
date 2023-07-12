interface BodyContainerProps {
    children: React.ReactNode;
}

export default function BodyContainer({ children }: BodyContainerProps): JSX.Element {
    return (
        <div className="container mx-auto mb-8 flex flex-col items-center justify-center gap-[1rem] mt-[2rem]">
            {children}
        </div>
    );
}
