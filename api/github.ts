/* eslint-disable prefer-const */
/* eslint-disable no-new-object */
/* eslint-disable no-plusplus */
import axios from 'axios';

const GIT_HUB_URL = 'https://api.github.com/users/petter1307';
const PROFILE_REPOS = 'https://api.github.com/users/petter1307/repos';

export const getUserData = async () => {
  try {
    const response = await axios.get(GIT_HUB_URL);
    return {
      name: response.data.name,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
      avatar: response.data.avatar_url,
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getUserRepos = async () => {
  try {
    const response = await axios.get(PROFILE_REPOS);
    console.log(response.data);
    // return response.data;
    return [
      {
        id: response.data.id,
        name: response.data.name,
        url: response.data.url,
        updated_at: response.data.updated_at,
      },
    ];
  } catch (error) {
    console.log(error);
    return [{}];
  }
};

export const getUserRepo = async () => {
  try {
    const response = await axios.get(PROFILE_REPOS);
    const listRepos = response.data;
    let array = [];
    for (let i = 0; i < response.data.length; i++) {
      array.push({
        id: listRepos[i].id,
        name: listRepos[i].name,
        url: listRepos[i].url,
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
