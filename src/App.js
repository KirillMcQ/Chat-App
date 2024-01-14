import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authenticate from './Pages/Authenticate';
import { getAppAuth } from './firebasehelpers';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const auth = getAppAuth();
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  console.log(user);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Home user={user} />} />
        <Route
          exact
          path='/authenticate'
          element={<Authenticate user={user} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
