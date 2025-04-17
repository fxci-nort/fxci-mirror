import { Link } from 'react-router-dom';
import { useState } from 'react';
import TrackingLink from '@/shared/components/TrackingLink';
import logo from '@/assets/img/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);

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
            <img src={logo} alt="fxci" />
          </Link>
        </div>
        <div className="">
          <nav className="header__nav">
            <Link to="/" className="plan-button">
              Home
            </Link>
            <div className="header__nav-dropdown">
              <span>Models</span>
              <div className="nav-dropdwn-list">
                <Link to="/swing">Swing</Link>
                <Link to="/instant">Instant</Link>
                <Link to="/intraday">Intraday</Link>
              </div>
            </div>
            <TrackingLink href="https://help.fxci.com/">FAQ</TrackingLink>
            <Link to="/about-us">About us</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>
        </div>
        <div className="header__right-block">
          <TrackingLink href="https://fxci.com/sign-up" className="btn-white-round link-class">
            Log in
          </TrackingLink>
        </div>
      </div>
      <div className="container mb-header lg-none">
        <div className="mb-header-top">
          <div className="header__logo">
            <Link to="/" className="plan-button">
              <img src={logo} alt="fxci" />
            </Link>
          </div>
          <div className="btn-mob-nav" onClick={toggleMobileMenu}></div>
        </div>
        <div className={`mb-nav-content ${isMobileMenuOpen ? '' : 'd-none'}`}>
          <div className="mb-nav-header">
            <TrackingLink href="https://fxci.com/sign-up" className="btn-white-round link-class">
              Log in
            </TrackingLink>
          </div>
          <div>
            <nav className="header__nav-mb-list">
              <Link to="/" className="plan-button">
                Home
              </Link>
              <div className="mb-nav-dropdwn">
                <span onClick={toggleModelsDropdown}>Models</span>
                <div className={`nav-dropdwn-list ${isModelsDropdownOpen ? '' : 'd-none'}`}>
                  <Link to="/swing">Swing</Link>
                  <Link to="/instant">Instant</Link>
                  <Link to="/intraday">Intraday</Link>
                </div>
              </div>
              <TrackingLink href="https://help.fxci.com/">FAQ</TrackingLink>
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
