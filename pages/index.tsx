/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */

import { getUserData, getUserRepo } from 'api/github';
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
  const returnedData = await getUserData();
  const repoDataList = await getUserRepo();
  return {
    props: {
      profileData: returnedData,
      reposList: repoDataList,
    },
  };
}
