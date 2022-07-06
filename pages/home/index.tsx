/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectCard, HElement, PageLayout } from '../../components';
import { getUserData, getUserRepos } from '../../api/github';
import useData from '../../hooks/useLocalData';

// interface Data {
//   name?: string;
//   company?: string;
//   followers?: number;
//   html_url?: string;
//   avatar?: string;
// }

interface Repo {
  id?: number;
  name?: string;
  updated_at?: string;
  html_url: string;
}

type RepoItems = Array<Repo>;

const Home = () => {
  const { stored, data, setData } = useData();
  // const [profileData, setProfileData] = useState<Data>({
  //   name: '',
  //   company: '',
  //   followers: 0,
  //   avatar: '',
  // });

  // const [repos, setRepos] = useState<RepoItems>([
  //   {
  //     id: 0,
  //     name: '',
  //     updated_at: '',
  //     html_url: '',
  //   },
  // ]);
  const [re, setRe] = useState();
  const [profileData, setProfileData] = useState();
  const initData = async () => {
    if (stored === false) {
      const pData = await getUserData();
      const repData: RepoItems = await getUserRepos();
      setData({ profileData: pData, repos: repData });
      console.log('data was stored xd');
    } else {
      console.log('data was already stored');
    }
  };
  useEffect(() => {
    console.log(data);
    // if (stored === false) {
    //   getUserRepos().then(resp => {
    //     setData({ ...data, repos: resp });
    //   });
    //   getUserData().then(resp => {
    //     setData({ ...data, profileData: resp });
    //   });
    // } else {
    //   // setUser(data.user);
    //   // setRepos(data.repos);
    //   console.log('data is already stored ');
    // }
    // console.log(data);
    initData();
    setRe(data.repos);
    setProfileData(data.profileData);
  }, []);
  return (
    <>
      <HElement value="home" />
      <PageLayout name="home" title="Home">
        <div className="page_home-summary">
          <div className="page_home-profile">
            <img alt="place" src="" width="100" height="100" />
            <div className="page_home-profile-text">
              <h1>
                {/* {data.profileData.name} */}
                {/* <a href={data.html_url} target="#"> */}
                <FontAwesomeIcon icon={faGithub} />
                {/* </a> */}
              </h1>
              <hr />
              <h3>Followers: {/* data.followers */}</h3>
              <h3>Company: {/* data.company */}</h3>
            </div>
          </div>
          <div className="page_home-summary-projects">
            <h1>Projects</h1>
            <ProjectCard title="hehe" link="" body="dd" />
            <ProjectCard title="hehe" link="" body="hehe" />
            <ProjectCard title="hehe" link="" body="hehe" />
          </div>
        </div>
        <button type="submit" onClick={() => console.log(data)}>
          Log data
        </button>
        <button type="submit" onClick={() => console.log(profileData)}>
          Log profileData
        </button>
        <button type="submit" onClick={() => console.log(re)}>
          Log repos
        </button>
        <HElement value="/home" />
      </PageLayout>
    </>
  );
};
// BUG User is null
export default Home;
// {`Last commit: ${repo[0].updated_at} `}
// const res = getUserRepos();
// const [repo, setRepo] = useRepoData();
// eslint-disable-next-line react-hooks/exhaustive-deps
//   const [repo, setRepo] = useState<RepoItems>([
//     {
//       id: 0,
//       name: '',
//       updated_at: '',
//       html_url: '',
//     },
//   ]);

//   const [data, setData] = useState<Data>({
//     name: '',
//     company: '',
//     followers: 0,
//     avatar: '',
//   });

//   const [storedData, setStoredData] = useLocalStore('profile', {});

//   const initApiData = async () => {
//     if (Object.keys(storedData).length === 0) {
//       console.log('Initializing the storedData');
//       const tmpData = await getUserData();
//       setData(tmpData);
//       const tmpRepos = await getUserRepos();
//       setRepo(tmpRepos);
//       setStoredData({
//         data: tmpData,
//         repos: tmpRepos,
//       });
//     } else {
//       console.log('StoreData is already initialized');
//     }
//   };
