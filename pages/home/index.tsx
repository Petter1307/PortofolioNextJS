/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-plusplus */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectCard, HElement, PageLayout } from '../../components';
import { Repo } from '../../types/types';

// @ts-ignore
const Home = ({ profileData, reposList }) => {
  return (
    <>
      <HElement value="home" />
      <PageLayout name="home" title="Home">
        <div className="page_home-summary">
          <div className="page_home-summary-profile">
            <img
              alt="place"
              src={profileData?.avatar}
              width="100"
              height="100"
            />
            <div className="page_home-summary-profile-text">
              <h1>
                {profileData?.name}
                <a href={profileData?.html_url} target="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </h1>
              <hr />
              <h3>{`Followers:  ${profileData?.followers}`}</h3>
              <h3>Company: {profileData?.company}</h3>
              <button
                onClick={() => {
                  console.log(reposList);
                }}
                type="submit"
              >
                XD
              </button>
            </div>
          </div>
          <div className="page_home-summary-projects">
            <h1>Projects</h1>
            {reposList?.map((repo: Repo) => (
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
