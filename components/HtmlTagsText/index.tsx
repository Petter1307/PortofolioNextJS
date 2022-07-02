import React from 'react';

type HElementProps = {
  value: string;
};

export const HElement: React.FC<HElementProps> = ({ value }) => {
  return <span className="html-element">&lt;{value}&gt;</span>;
};
