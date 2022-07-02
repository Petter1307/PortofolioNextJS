// export { default as Home } from "./Home";
import { useEffect } from 'react';
// import { HElement, ArticleCard, ProjectCard } from '../../Components';
import { ProjectCard, HElement, ArticleCard } from '../components';
import { PageLayout } from '../components';

const Home = () => {
  useEffect(() => {
    console.log('xd');
  }, []);
  return (
    <>
      <HElement value="home" />
      <PageLayout name="home" title="Home">
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
            <ProjectCard title="" link="" body="" />
            <ProjectCard title="" link="" body="" />
            <ProjectCard title="" link="" body="" />
          </div>
        </div>
        <div className="page_home-description">
          <h1>This is the home page from index</h1>
        </div>
        <HElement value="/home" />
      </PageLayout>
    </>
  );
};

export default Home;
