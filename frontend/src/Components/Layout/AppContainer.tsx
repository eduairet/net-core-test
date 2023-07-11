import NavBar from "../UI/NavBar";

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps): JSX.Element {
    return (
        <>
            <NavBar />
            <div className="container-fluid pt-5 pb-10">
                {children}
            </div>
        </>
    );
}
