/* eslint-disable prefer-const */
/* eslint-disable no-new-object */
/* eslint-disable no-plusplus */
import axios from 'axios';
import { Data, RepoItems } from '../types/types';

const GIT_HUB_URL = 'https://api.github.com/users/petter1307';
const PROFILE_REPOS = 'https://api.github.com/users/petter1307/repos';

export const getUserData = async () => {
  try {
    const response = await axios.get(GIT_HUB_URL);
    const returnedData: Data = {
      name: response.data.name,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
      avatar: response.data.avatar_url,
    };
    return returnedData;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getUserRepo = async () => {
  try {
    const response = await axios.get(PROFILE_REPOS);
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
};
