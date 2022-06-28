import { ArticleCard, ProjectCard } from "../../Components";

/* eslint-disable max-len */
const Admin = () => {
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
    </>
  );
};
export default Admin;
// TODO Fix the fucking scss system. This is ugly af.
