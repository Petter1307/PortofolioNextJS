import { useEffect } from "react";
import { HElement, ArticleCard, ProjectCard } from "../../Components";
const Home = () => {
  useEffect(() => {
    console.log("xd");
  }, []);
  return (
    <>
      <HElement value={"home"} />
      <div className="page_home">
        <h1 className="page_title">HOME</h1>
        <div className="page_home-summary">
          <div className="page_home-summary-articles">
            <h1>Articles</h1>
            <ArticleCard title="Hehe" body="XDAKLSDJ alsdjasdjk salkd " />
            <ArticleCard title="Hehe" body="XDAKLSDJ alsdjasdjk salkd " />
            <ArticleCard
              title="Title 2"
              body="WHy I did`nt installed lorem yet ? I dunno"
            />
          </div>
          <div className="page_home-summary-articles">
            <h1>Projects</h1>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
        <div className="page_home-description">
          <h1>
            HEHE pls, don`t mind this text, i am too lazy to install lorem
            ipsium or how tf it is called. anyway, i should do something more
            imortant than writing dumb text xd. Also this is a placeholder for
            future who knows what
          </h1>
        </div>
      </div>
      <HElement value={"/home"} />
    </>
  );
};

export default Home;
