import NavBar from "../UI/NavBar";

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps): JSX.Element {
    return <div><NavBar />{children}</div>;
}
