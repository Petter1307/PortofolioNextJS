import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../Components/Input/Input";
import { useAuth } from "../../Hooks";
const InputLabel = ({ label, type, value, onChange }) => {
  return (
    <>
      <label>
        {label}
        <Input type={type} value={value} onChange={onChange} />
      </label>
    </>
  );
};

const Login = ({ onSubmit }) => {
  const [data, setData] = useState({
    email: "test@test.com",
    password: "passwordxdd",
    username: "up23",
  });
  const { email, password, username } = data;
  const handleInputChange = useCallback(
    (key) => (value) => {
      setData({ ...data, [key]: value });
    },
    []
  );
  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(data);
    },
    [data, onSubmit]
  );
  return (
    <>
      <form style={{ display: "grid" }} onSubmit={handleSumbit}>
        <InputLabel
          label="Username:"
          value={username}
          onChange={handleInputChange("username")}
        />
        <InputLabel
          label="Email:"
          type="email"
          value={email}
          onChange={handleInputChange("email")}
        />
        <InputLabel
          type="password"
          label="Password: "
          value={password}
          onChange={handleInputChange("password")}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = useCallback((data) => {
    login(data);
    navigate("/", { replace: true });
  }, []);
  return (
    <div>
      <Login onSubmit={handleSubmit}></Login>
    </div>
  );
};

export default Auth;
