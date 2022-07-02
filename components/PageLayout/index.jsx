// eslint-disable-next-line react/prop-types
export const PageLayout = ({ children, title, name }) => {
  return (
    <div className={`page_ + ${name}`}>
      <h1 className="page_title">{title}</h1>
      <p>This is PageLayout Component xd </p>
      {children}
    </div>
  );
};
