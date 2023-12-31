import { NavLink, Outlet } from 'react-router-dom';

const cls = {
    active: 'text-blue-300 hover:text-blue-300 focus:text-blue-300',
    pending: 'text-blue-600'
}

const menuLinks: { id: number, name: string, link: string }[] = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Employees', link: '/employees' },
    { id: 3, name: 'Departments', link: '/departments' },
]

export default function NavBar(): JSX.Element {
    return (
        <>
            <nav className="p-4">
                <div className="max-w-screen-xl px-4 py-3 mx-auto flex items-center justify-center">
                    <ul className="flex flex-row font-medium space-x-8 text-sm">
                        {menuLinks.map(link => (
                            <li key={`nav-link-${link.id}`}>
                                <NavLink to={link.link} className={({ isActive, isPending }) =>
                                    isPending ? cls.pending : isActive ? cls.active : "text-white transition-all hover:text-blue-300 hover:text-blue-300"
                                }
                                    aria-current="page">{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
