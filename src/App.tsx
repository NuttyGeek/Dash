import React from 'react';
import './App.css';
import { LoginPage } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { SchemaListPage } from './pages/SchemaList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={''} element={<Layout/>}>
            <Route path='/login' element={<LoginPage/>} />
            <Route path={'/schemas'} element={<SchemaListPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
