// export { default as Home } from "./Home";
import { useEffect } from 'react';
// import { HElement, ArticleCard, ProjectCard } from '../../Components';
import {
  ProjectCard,
  HElement,
  ArticleCard,
  PageLayout,
} from '../../components';

const Home = () => {
  useEffect(() => {
    console.log('xd');
  }, []);
  return (
    <>
      <HElement value="home" />

      <PageLayout title="Home" name="home">
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
          <h1>This is the home page inside pages asda sjdkajs kdj</h1>
        </div>
      </PageLayout>

      <HElement value="/home" />
    </>
  );
};

export default Home;
