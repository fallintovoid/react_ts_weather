import React from 'react';
import Home from './pages/Home/Home';
import './styles/index.scss'
import Header from './shared/Header/Header';

function App() {
    return (
      <div className="container">
          <Header/>
          <Home/>
      </div>
    );
}

export default App;
