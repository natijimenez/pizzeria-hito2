import './App.css'
import Footer from './components/Footer'
// import Home from './components/Home'
import { useState } from 'react';
import Navigation from './components/Navigation'
// import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {

  const [token, setToken] = useState(false);

  return (
    <>
      <Navigation token={token} />
      <a className='switchToken' onClick={() => setToken(!token)}>
        {token ? 'Log Out' : 'Log In'}
      </a>
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </>
  )
}

export default App
