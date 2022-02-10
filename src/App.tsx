import React from 'react';
// import logo from './logo.svg';
import './App.css';
import VerifyNamberPhone from './components/VerifyNamberPhone';
import ViewVideo from './components/ViewVideo';

const App: React.FC = () => {
  return (
    <>
      <ViewVideo/>
      <VerifyNamberPhone/>
    </>
  );
}

export default App;
