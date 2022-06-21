import PropTypes from "prop-types";
const ArticleCard = ({ tilte, body }) => {
  return (
    <article className="article-card">
      <header>{tilte}</header>
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
