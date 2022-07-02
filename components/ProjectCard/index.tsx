import React from 'react';

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
        {title}
        <a href={link}>Link icon</a>
      </header>
      <p>{body}</p>
    </article>
  );
};
