import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { FormSignUp } from './components/forms';

import { Login } from './pages'
import Forms from './pages/Forms';
import './styles/index.css';

const Home = React.lazy(() => import("./pages/Home") )
const FormSignUp = React.lazy(() => import('./components/forms/formSignUp') )
// const Forms = React.lazy(() => import("./pages/Forms") )

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="home" 
          element={
            <React.Suspense fallback={<>Carregando...</>}>
              <Home />
            </React.Suspense>
          } />

        <Route path="cadastro" element={<Forms />}> 
          <Route path="usuario" 
          element={
            <React.Suspense fallback={<>Carregando...</>}>
              <FormSignUp />
            </React.Suspense>
          } />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
