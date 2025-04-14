import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);

    const setupRedirects = () => {
        navigate('/login');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleModelsDropdown = () => {
        setIsModelsDropdownOpen(!isModelsDropdownOpen);
    };

    return (
        <header id="header" className="header__fixed">
            <div className="container mb-none">
                <div className="header__logo">
                    <Link to="/" className="plan-button">
                        <img src="/img/logo.svg" alt="fxci" />
                    </Link>
                </div>
                <div className="">
                    <nav className="header__nav">
                        <Link to="/" className="plan-button">Home</Link>
                        <div className="header__nav-dropdown">
                            <span>Models</span>
                            <div className="nav-dropdwn-list">
                                <Link to="/swing">Swing</Link>
                                <Link to="/instant">Instant</Link>
                                <Link to="/intraday">Intraday</Link>
                            </div>
                        </div>
                        <a href="https://help.fxci.com/">FAQ</a>
                        <Link to="/about-us">About us</Link>
                        <Link to="/contacts">Contacts</Link>
                    </nav>
                </div>
                <div className="header__right-block">
                    <a className="btn-white-round link-class" onClick={setupRedirects}>Log in</a>
                </div>
            </div>
            <div className="container mb-header lg-none">
                <div className="mb-header-top">
                    <div className="header__logo">
                        <Link to="/" className="plan-button">
                            <img src="/img/logo.svg" alt="fxci" />
                        </Link>
                    </div>
                    <div className="btn-mob-nav" onClick={toggleMobileMenu}></div>
                </div>
                <div className={`mb-nav-content ${isMobileMenuOpen ? '' : 'd-none'}`}>
                    <div className="mb-nav-header">
                        <a className="btn-white-round link-class" onClick={setupRedirects}>Log in</a>
                    </div>
                    <div>
                        <nav className="header__nav-mb-list">
                            <Link to="/" className="plan-button">Home</Link>
                            <div className="mb-nav-dropdwn">
                                <span onClick={toggleModelsDropdown}>Models</span>
                                <div className={`nav-dropdwn-list ${isModelsDropdownOpen ? '' : 'd-none'}`}>
                                    <Link to="/swing">Swing</Link>
                                    <Link to="/instant">Instant</Link>
                                    <Link to="/intraday">Intraday</Link>
                                </div>
                            </div>
                            <a href="https://help.fxci.com/">FAQ</a>
                            <Link to="/about-us">About us</Link>
                            <Link to="/contacts">Contacts</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;