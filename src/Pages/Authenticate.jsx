import AuthForm from '../Components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';

function Authenticate({ user }) {
  const nav = useNavigate();

  if (user) {
    nav('/');
  }
  return (
    <>
      <AuthForm />
    </>
  );
}

export default Authenticate;
