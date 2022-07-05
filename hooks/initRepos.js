import { useState } from 'react';
import getUserRepos from '../api/github';

export const useRepoData = () => {
  const [repo, setrepo] = useState();

  const setRepo = async () => {
    const res = await getUserRepos();
    setrepo(res);
  };
  return [repo, setRepo];
};
