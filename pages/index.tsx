/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import axios from 'axios';
import { Data, RepoItems } from 'types/types';
import Home from './home/index';
import { DataProvider } from '../providers/DataProvider';

// @ts-ignore
const IndexPage = ({ profileData, reposList }) => {
  return (
    <DataProvider>
      <Home profileData={profileData} reposList={reposList} />
    </DataProvider>
  );
};
export default IndexPage;

export async function getStaticProps() {
  console.log('This was called');
  try {
    const response = await axios.get('https://api.github.com/users/petter1307');
    const returnedData: Data = {
      name: response.data.name,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
      avatar: response.data.avatar_url,
    };
    const responseRepo = await axios.get(
      'https://api.github.com/users/petter1307/repos'
    );
    const listRepos = responseRepo.data;
    const repoDataList: RepoItems = [];
    for (let i = 0; i < listRepos.length; i++) {
      repoDataList.push({
        id: listRepos[i].id,
        name: listRepos[i].name,
        url: listRepos[i].html_url,
        updated_at: listRepos[i].updated_at,
      });
    }

    return {
      props: {
        profileData: returnedData,
        reposList: repoDataList,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        profileData: {},
        reposList: [],
      },
    };
  }
}
