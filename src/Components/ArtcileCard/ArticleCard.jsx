import PropTypes from "prop-types";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ArticleCard = ({ title, body }) => {
  useEffect(() => {}, []);
  return (
    <article className="article-card">
      <header>{title}</header>
      <hr />
      <p>{body}</p>
    </article>
  );
};

ArticleCard.protoTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};
ArticleCard.defaultProps = {
  title: "TILE",
  body: "Why tf you have this empty? cmon.",
};

export default ArticleCard;
