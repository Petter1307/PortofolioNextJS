/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-plusplus */
import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { ProjectCard, HElement, PageLayout } from '../../components';
import { getUserData } from '../../api/github';
import { Repo, Data, RepoItems } from '../../types/types';

const Home = () => {
  const getUserRepo = useCallback(async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/users/petter1307/repos'
      );
      const listRepos = response.data;
      const array: RepoItems = [];
      for (let i = 0; i < listRepos.length; i++) {
        array.push({
          id: listRepos[i].id,
          name: listRepos[i].name,
          url: listRepos[i].html_url,
          updated_at: listRepos[i].updated_at,
        });
      }
      console.log(array);
      return array;
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);
  const [profile, setProfile] = useState<Data>();
  const [repos, setRepos] = useState<RepoItems>();
  useEffect(() => {
    getUserData().then(resp => {
      setProfile(prof => {
        return { ...prof, ...resp };
      });
    });
    getUserRepo().then(data => {
      setRepos(old => data);
    });
  }, []);

  return (
    <>
      <HElement value="home" />
      <PageLayout name="home" title="Home">
        <div className="page_home-summary">
          <div className="page_home-summary-profile">
            <img alt="place" src={profile?.avatar} width="100" height="100" />
            <div className="page_home-summary-profile-text">
              <h1>
                {profile?.name}
                <a href={profile?.html_url} target="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </h1>
              <hr />
              <h3>{`Followers:  ${profile?.followers}`}</h3>
              <h3>Company: {profile?.company}</h3>
            </div>
          </div>
          <div className="page_home-summary-projects">
            <h1>Projects</h1>
            {repos?.map((repo: Repo) => (
              <ProjectCard
                title={repo.name}
                link={repo.url}
                body={repo.updated_at}
                key={repo.id}
              />
            ))}
          </div>
        </div>
        <HElement value="/home" />
      </PageLayout>
    </>
  );
};

export default Home;

// const array: RepoItems = [];
// data.map((obj: Repo) => {
//   array.push(obj);
// });
// const array: RepoItems = [];
//       data.map((obj: Repo) => {
//         array.push({
//           id: obj.id,
//           name: obj.name,
//           url: obj.url,
//           updated_at: obj.updated_at,
//         });
//       });
