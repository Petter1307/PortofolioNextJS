import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LabelInput } from "../../Components";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    pass: "",
  });
  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("username"));
    console.log(data.get("password"));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <LabelInput label="Username" name="username" />
        <LabelInput label="Password" type="password" name="password" />
        <button>Login</button>
      </form>
    </>
  );
};

// const Auth = () => {
//   const navigate = useNavigate();
//   console.log(useAuth());
//   const { login } = useAuth();
//   const handleSubmit = useCallback(({ username, pass }) => {
//     console.log(login);
//     login({ username, pass });
//     navigate("/admin", { replace: true });
//   }, []);
//   return (
//     <>
//       <Login submit={handleSubmit} />
//     </>
//   );
// };

export default Login;
