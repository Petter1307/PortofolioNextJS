import { LabelInput } from "../../Components";

const Login = () => {
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

export default Login;
