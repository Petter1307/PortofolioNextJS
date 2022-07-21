import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProjectCardProp = {
  title: string | undefined;
  link: string | undefined;
  body: string | undefined;
};

export const ProjectCard: React.FC<ProjectCardProp> = ({
  title,
  link,
  body,
}) => {
  return (
    <article>
      <header data-testid="project-card-header">
        {`${title} `}

        <a href={link}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </header>
      <p>{body}</p>
    </article>
  );
};
