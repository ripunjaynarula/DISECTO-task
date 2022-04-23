import React from 'react';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Main from './components/Main';
import Create from './components/create';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}>
            <Route index element={<Main />} />
            <Route path="createCollection" element={<Create />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
