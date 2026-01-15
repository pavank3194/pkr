import './scss/index.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Register from './auth/Register';


function App() {
  return (
      <HashRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
        {/* other routes */}
      </Routes>
    </HashRouter>
  );
}

export default App;
