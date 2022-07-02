/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/prop-types */
// export { default as SideBar } from "./SideBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { NavLink } from 'react-router-dom';
// import HElement from '../HtmlTagsText/HtmlElements';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faNewspaper,
  faHdd,
} from '@fortawesome/free-solid-svg-icons';
import { HElement } from '../HtmlTagsText';

const SideBar = ({ children }) => {
  return (
    <>
      <div className="nav-bar">
        <HElement value="div" />
        <FontAwesomeIcon className="logo" icon={faHdd} />
        <nav>
          <HElement value="nav" />
          <a href="/">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="/login">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="/admin">
            <FontAwesomeIcon icon={faNewspaper} />
          </a>
          <a href="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <HElement value="/nav" />
        </nav>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/" target="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <HElement value="/div" />
        </ul>
      </div>
      {children}
    </>
  );
};

export default SideBar;
