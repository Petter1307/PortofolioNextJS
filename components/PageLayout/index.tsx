import React from 'react';

type PageLayoutProp = {
  children: React.ReactNode;
  title: string;
  name: string;
};

export const PageLayout: React.FC<PageLayoutProp> = ({
  children,
  title,
  name,
}) => {
  return (
    <div className={`page_ + ${name}`}>
      <h1 className="page_title">{title}</h1>
      {children}
    </div>
  );
};
