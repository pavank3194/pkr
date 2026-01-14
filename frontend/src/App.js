import './scss/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './auth/Register';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
