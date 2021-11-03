import { Link, useLocation } from 'react-router-dom';
import { hideBodyScroll, showBodyScroll } from '../../utils';
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
  const isTogglerEnabled = useSelector((state) => state.ui.isTogglerEnabled);

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
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [isNavOpen, isOverlayActive]);

  const handleToggler = () => {
    dispatch(toggleNav());
    dispatch(toggleOverlay());
  };

  const handleNavLink = (e) => {
    if (location.pathname === e.target.getAttribute('href')) {
      dispatch(closeNav());
      dispatch(hideOverlay());
    }
  };

  let togglerClasses = 'navbar-toggler mr-15';

  if (isNavOpen) togglerClasses += ' navbar-toggler--active';
  if (!isTogglerEnabled) togglerClasses += ' navbar-toggler--hide';

  return (
    <header className="header">
      <div className="container flex justify-end">
        <button className={togglerClasses} onClick={handleToggler}>
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