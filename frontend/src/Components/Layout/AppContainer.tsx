import Footer from "../UI/Footer";
import NavBar from "../UI/NavBar";

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps): JSX.Element {
    return (
        <>
            <div className="container mx-auto flex flex-col justify-between pt-5 pb-10 py-2 min-h-[100vh]">
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    );
}
