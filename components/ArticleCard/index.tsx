/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import React from 'react';

type ArticleCardProps = {
  title: string;
  body: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, body }) => {
  useEffect(() => {
    console.log('useeffect article card');
  }, []);
  return (
    <article className="article-card">
      <header>{title}</header>
      <hr />
      <p>{body}</p>
    </article>
  );
};
