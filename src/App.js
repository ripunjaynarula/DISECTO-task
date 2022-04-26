import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/create';
import Navbar from './components/Navbar';
import View from './components/View';
import View1 from './components/View1';

import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              
            </Route>
            <Route path="/createCollection" element={<Create />} ></Route>
            <Route path="/viewCollections1" element={<View1 />} ></Route>
            <Route path="/viewCollections" element={<View />} ></Route>
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
