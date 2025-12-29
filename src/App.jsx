import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Inventory from './Inventory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;