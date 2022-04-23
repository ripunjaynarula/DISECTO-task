import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/create';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="createCollection" element={<Create />} ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
