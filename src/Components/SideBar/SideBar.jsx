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
  //TODO Implement NAV LINK XD
  return (
    <div className="nav-bar">
      <HElement value={"div"} />
      <FontAwesomeIcon className="logo" icon={faHdd} />
      <nav>
        <HElement value={"nav"} />
        <a>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a>
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a>
          <FontAwesomeIcon icon={faNewspaper} />
        </a>
        <a>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <HElement value={"/nav"} />
      </nav>

      <ul>
        <li>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <HElement value={"/div"} />
      </ul>
    </div>
  );
};

export default SideBar;
