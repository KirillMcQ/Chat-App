import './AuthForm.css';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { authenticateWithGoogle } from '../../firebasehelpers';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const nav = useNavigate();

  function handleLogin() {
    authenticateWithGoogle(nav);
  }

  return (
    <div className='authFormCenterWrapper'>
      <form className='authForm'>
        <Button
          variant='contained'
          endIcon={<GoogleIcon />}
          onClick={handleLogin}
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
