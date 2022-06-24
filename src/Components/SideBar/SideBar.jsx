import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import HElement from "../HtmlTagsText/HtmlElements";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faNewspaper,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const SideBar = () => {
  return (
    <div className="nav-bar">
      <HElement value={"div"} />
      <FontAwesomeIcon className="logo" icon={faHdd} />
      <nav>
        <HElement value={"nav"} />
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faNewspaper} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <HElement value={"/nav"} />
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
        <HElement value={"/div"} />
      </ul>
    </div>
  );
};

export default SideBar;
