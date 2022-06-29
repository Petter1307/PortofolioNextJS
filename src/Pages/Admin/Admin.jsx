import { Navigate, useNavigate } from "react-router-dom";
import { ArticleCard, ProjectCard } from "../../Components";
import useAuth from "../../Hooks/useAuth";
/* eslint-disable max-len */
const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate;
  return (
    <>
      <h1 className="page_title">Boss page</h1>
      <div className="text_management">
        <p>Articles:</p>
        <ArticleCard />
        <button>Delete</button>
        <button>Hide</button>
        <button>Post</button>
        {/* {//TODO Add function to fetch all articles and projects to be managed. Deleted, posted or hidden} */}
      </div>
      <div className="projects_management">
        <p>Projects:</p>
        <ProjectCard />
        <button>Delete</button>
        <button>Hide</button>
        <button>Post</button>
      </div>
      <button
        onClick={() => {
          logout();
          <Navigate to="/" replace={true} />;
        }}
      >
        Log out
      </button>
    </>
  );
};
export default Admin;
// TODO Fix the fucking scss system. This is ugly af.
