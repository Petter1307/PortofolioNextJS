/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
// export { default as Home } from "./Home";
import { useEffect, useState } from 'react';
// import { HElement, ArticleCard, ProjectCard } from '../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectCard, HElement, PageLayout } from '../components';

import { getUserData, getUserRepos } from '../api/github';

interface Data {
  name?: string;
  company?: string;
  followers?: number;
  html_url?: string;
  avatar?: string;
}

interface Repo {
  id?: number;
  name?: string;
  updated_at?: string;
  html_url: string;
}
type RepoItems = Array<Repo>;

const Home = () => {
  // const res = getUserRepos();
  // const [repo, setRepo] = useRepoData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [repo, setRepo] = useState<RepoItems>([
    {
      id: 0,
      name: '',
      updated_at: '',
      html_url: '',
    },
  ]);
  const [data, setData] = useState<Data>({
    name: '',
    company: '',
    followers: 0,
    avatar: '',
  });
  useEffect(() => {
    console.log('dx');
    getUserRepos().then(resp => {
      setRepo(resp);
    });
    getUserData().then(resp => {
      setData(resp);
    });
  }, []);
  return (
    <>
      <HElement value="home" />
      <PageLayout name="home" title="Home">
        <div className="page_home-summary">
          <div className="page_home-profile">
            <img alt="place" src={data.avatar} width="100" height="100" />
            <div className="page_home-profile-text">
              <h1>
                {data.name}
                <a href={data.html_url} target="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </h1>
              <hr />
              <h3>Followers: {data.followers}</h3>
              <h3>Company: {data.company}</h3>
            </div>
          </div>
          <div className="page_home-summary-projects">
            <h1>Projects</h1>
            <ProjectCard
              title="hehe"
              link=""
              body={`Last commit: ${repo[0].updated_at} `}
            />
            <ProjectCard title="hehe" link="" body="hehe" />
            <ProjectCard title="hehe" link="" body="hehe" />
          </div>
          <button onClick={() => console.log(repo.length)}>d</button>
        </div>
        <HElement value="/home" />
      </PageLayout>
    </>
  );
};

export default Home;

// eslint-disable-next-line no-lone-blocks
{
  /* <h1>Articles</h1>
            <ArticleCard title="Hehe" body="XDAKLSDJ alsdjasdjk salkd " />
            <ArticleCard title="Hehe" body="XDAKLSDJ alsdjasdjk salkd " />
            <ArticleCard
              title="Title 2"
              body="WHy I did`nt installed lorem yet ? I dunno"
            /> */
}
