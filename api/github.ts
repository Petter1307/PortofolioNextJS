/* eslint-disable prefer-const */
/* eslint-disable no-new-object */
/* eslint-disable no-plusplus */
import axios from 'axios';
import fsPromises from 'fs/promises';
import path from 'path';
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

export const getUserDataLocal = async () => {
  const filePath = path.join(process.cwd(), 'profileData.json');
  const jsonData = await fsPromises.readFile(filePath);
  const response = JSON.parse(jsonData.toString());
  const returnedData: Data = {
    name: response.name,
    company: response.company,
    followers: response.followers,
    html_url: response.html_url,
    avatar: response.avatar_url,
  };

  return returnedData;
};

export const getUserRepoLocal = async () => {
  const filePath = path.join(process.cwd(), 'reposData.json');
  const jsonData = await fsPromises.readFile(filePath);
  const response = JSON.parse(jsonData.toString());
  const array: RepoItems = [];
  for (let i = 0; i < response.length; i++) {
    array.push({
      id: response[i].id,
      name: response[i].name,
      url: response[i].html_url,
      updated_at: response[i].updated_at,
    });
  }
  return array;
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
    return array;
  } catch (error) {
    console.log(error);
    return [];
  }
};
