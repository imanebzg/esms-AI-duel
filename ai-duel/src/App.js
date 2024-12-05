
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';

function App() {

  return (
    <Router>
      <main>
        <Routes>
        <Route path="/" exact element= {<div className='App'><LandingPage/></div> } />
      </Routes>
      </main>
    </Router>

  );
}

export default App;
