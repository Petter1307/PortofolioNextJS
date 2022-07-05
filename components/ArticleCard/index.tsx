import React from 'react';

type ArticleCardProps = {
  title: string;
  body: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, body }) => {
  return (
    <article className="article-card">
      <header>{title}</header>
      <hr />
      <p>{body}</p>
    </article>
  );
};
