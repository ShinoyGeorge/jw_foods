import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-transparent py-4 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between px-4">
                <a className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-16 w-16" />
                        <span className="text-3xl font-bold text-custom-green">
                            JW Farms
                        </span>
                    </div>
                </a>
                <Nav />
            </div>
        </header>
    );
}

function Nav() {
    const navItems = ['Services', 'Areas', 'About', 'Contact Us'];
    return (
        <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
                <a
                    className="text-lg font-medium text-white transition-colors hover:text-custom-green"
                    key={item}
                    href={item.href}
                >
                    {item}
                </a>
            ))}
        </nav>
    );
}
