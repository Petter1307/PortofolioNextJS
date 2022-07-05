import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProjectCardProp = {
  title: string;
  link: string;
  body: string;
};

export const ProjectCard: React.FC<ProjectCardProp> = ({
  title,
  link,
  body,
}) => {
  return (
    <article>
      <header>
        {`${title} `}

        <a href={link}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </header>
      <p>{body}</p>
    </article>
  );
};
