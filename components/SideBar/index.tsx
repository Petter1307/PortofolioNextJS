/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

type SideBarProps = {
  children: React.ReactNode;
};

export const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <>
      <div className="nav-bar">
        <HElement value="div" />
        <FontAwesomeIcon className="logo" icon={faHdd} />
        <nav>
          <HElement value="nav" />

          <div className="nav-icon">
            <Link href="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <div className="nav-icon">
            <Link href="/login" target="_blank">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          <div className="nav-icon">
            <Link href="/admin">
              <FontAwesomeIcon icon={faNewspaper} />
            </Link>
          </div>
          <div className="nav-icon">
            <Link href="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
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

// export default SideBar;
