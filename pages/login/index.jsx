import { useCallback } from 'react';
// import { useRouter } from 'next/dist/client/router';
import { PageLayout, LabelInput } from '../../components';
import useAuth from '../../hooks/useAuth';

// eslint-disable-next-line react/prop-types
const Login = ({ submit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get('username'));
    console.log(data.get('password'));
    submit({ username: data.get('username'), pass: data.get('password') });
  };
  return (
    <PageLayout name="login" title="Login">
      <form onSubmit={handleSubmit}>
        <LabelInput label="Username" name="username" />
        <LabelInput label="Password" type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </PageLayout>
  );
};

const Auth = () => {
  console.log(useAuth());
  const { login } = useAuth();

  const handleSubmit = useCallback(({ username, pass }) => {
    console.log(login);
    login({ username, pass });
  }, []);

  return <Login submit={handleSubmit} />;

  // TODO Add a reddirection thing to go to the admin page
};

export default Auth;
