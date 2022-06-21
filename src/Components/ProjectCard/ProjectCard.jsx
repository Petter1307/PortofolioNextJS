import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const ProjectCard = ({ title, gitlink, body }) => {
  return (
    <article>
      <header>
        {title}
        <a href={gitlink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </header>
      <p>{body}</p>
    </article>
  );
};

ProjectCard.protoTypes = {
  title: PropTypes.string,
  gitlink: PropTypes.string,
  body: PropTypes.string,
};

ProjectCard.defaultProps = {
  title: "Titlu",
  gitlink: "https://github.com/",
  body: "THIS IS THE BODY PROP WHY THE FUKC DID YOU SEND THIS AS EMPTY? TELL FFS SOMETHING ABOUT THIS FKING PROJECT",
};

export default ProjectCard;
