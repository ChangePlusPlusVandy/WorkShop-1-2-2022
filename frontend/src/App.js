import {Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// todo: React Router DOM enables you to implment dynamic routing (navigation) 
// in your web application

import Welcome from './components/Welcome';
import Results from './components/Results';
import Game from './components/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/results" element={<Results/>} />
        <Route exact path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
