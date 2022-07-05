import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { ArticleCard, ProjectCard } from '../../components';

const Admin = () => {
  const router = useRouter();
  const { authed, logout } = useAuth();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !authed ? router.push('/login') : router.push('/admin');
  }, []);
  return (
    <>
      <h1 className="page_title">Boss page</h1>
      <div className="text_management">
        <p>Articles:</p>
        <ArticleCard />
        <button type="submit">Delete</button>
        <button type="submit">Hide</button>
        <button type="submit">Post</button>
        {/* {//TODO Add function to fetch all articles and projects to be managed. Deleted, posted or hidden} */}
      </div>
      <div className="projects_management">
        <p>Projects:</p>
        <ProjectCard />
        <button type="submit">Delete</button>
        <button type="submit">Hide</button>
        <button type="submit">Post</button>
      </div>
      <button
        type="submit"
        onClick={() => {
          logout();
          router.push('/');
        }}
      >
        Log out
      </button>
    </>
  );
};
export default Admin;
