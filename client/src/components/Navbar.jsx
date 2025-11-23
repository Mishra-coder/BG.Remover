import { Link } from 'react-router-dom';
import { Layers, Sun, Moon } from 'lucide-react';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <Layers className="logo-icon" />
                    <span>BG.Remover</span>
                </Link>
                <div className="nav-right">
                    <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <SignedOut>
                        <Link to="/sign-up" className="btn btn-primary btn-sm">Get Started</Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
