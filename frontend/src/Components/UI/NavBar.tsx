import { NavLink, Outlet } from 'react-router-dom';

export default function NavBar(): JSX.Element {
    return (
        <>
            <nav className="bg-blue-600">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <NavLink to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/employees" className="text-gray-900 dark:text-white hover:underline">Employees</NavLink>
                            </li>
                            <li>
                                <NavLink to="/departments" className="text-gray-900 dark:text-white hover:underline">Departments</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
