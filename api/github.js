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
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
