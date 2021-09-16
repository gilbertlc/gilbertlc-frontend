import { Link, useLocation } from 'react-router-dom';
import {
  hideBodyScroll,
  showBodyScroll,
  closeOverlayEffect,
  openOverlayEffect,
} from '../../utils';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeNav,
  toggleNav,
  hideOverlay,
  toggleOverlay,
} from '../../store/actions/ui';

const Header = (props) => {
  const location = useLocation();
  const isNavOpen = useSelector((state) => state.ui.isNavOpen);
  const dispatch = useDispatch();
  const isInitial = useRef(true);
  const isOverlayActive = useSelector((state) => state.ui.isOverlayActive);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    if (isNavOpen) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }

    if (isOverlayActive) {
      openOverlayEffect();
      hideBodyScroll();
    } else {
      closeOverlayEffect();
      showBodyScroll();
    }
  }, [isNavOpen, isOverlayActive]);

  const handleToggler = () => {
    dispatch(toggleNav());
    dispatch(toggleOverlay());
  };

  const handleNavLink = (e) => {
    if (location.pathname === e.target.getAttribute('href')) {
      closeOverlayEffect();
      dispatch(closeNav());
      dispatch(hideOverlay());
    }
  };

  return (
    <header className="header">
      <div className="container flex justify-end">
        <button
          className={`navbar-toggler${
            isNavOpen ? ' navbar-toggler--active' : ''
          } mr-15`}
          onClick={handleToggler}
        >
          <span className="navbar-toggler__icon"></span>
        </button>

        <nav className={`navbar${isNavOpen ? ' navbar--open' : ''} center`}>
          <ul className="text-center">
            <li>
              <Link
                to="/"
                className="navbar__link text-bold"
                onClick={handleNavLink}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="navbar__link text-bold"
                onClick={handleNavLink}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="navbar__link text-bold"
                onClick={handleNavLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
