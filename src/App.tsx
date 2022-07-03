import { getAuth } from 'firebase/auth';
import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { FormSignUp } from './components/forms';

import CoursesListing from './pages/CoursesListing';
import Forms from './pages/Forms';
import RoomsListing from './pages/RoomsListing';
import StudentsListing from './pages/StudentsListing';

import { Login } from './pages';
import Listing from './pages/Listing';

const Home = React.lazy(() => import("./pages/Home") )
const FormSignUp = React.lazy(() => import('./components/forms/formSignUp') )
const FormStudent = React.lazy(() => import('./components/forms/formStudent') )
const FormRoom = React.lazy(() => import('./components/forms/formRoom') )
const FormClass = React.lazy(() => import('./components/forms/formClass') )
const FormPeriod = React.lazy(() => import('./components/forms/formPeriod') )
// const Forms = React.lazy(() => import("./pages/Forms") )

function PrivateRoutes(props: any) {
  const { children } = props
  let user = sessionStorage.user || getAuth().currentUser
  return user ? children : <Navigate to="/login" />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={
            <PrivateRoutes>
              <React.Suspense fallback={<p>Carregando...</p>}>
                <Home />
              </React.Suspense>
            </PrivateRoutes>
        } />
        <Route path="/lista" element={<Listing />}>
          <Route path="alunos" element={
            <PrivateRoutes>
              <StudentsListing />
            </PrivateRoutes>
          }/>
          <Route path="turmas" element={
            <PrivateRoutes>
              <RoomsListing />
            </PrivateRoutes>
          }/>
          <Route path="cursos" element={
            <PrivateRoutes>
              <CoursesListing />
            </PrivateRoutes>
          }/>
        </Route>
        <Route path="/cadastro" element={<Forms />}> 
          <Route path="usuario" element={
            <React.Suspense fallback={<p>Carregando...</p>}>
              <FormSignUp />
            </React.Suspense>
          } />
          <Route path="aluno" element={
            <React.Suspense fallback={<p>Carregando...</p>}>
              <FormStudent />
            </React.Suspense>
          } />
          <Route path="turma" element={
            <React.Suspense fallback={<p>Carregando...</p>}>
              <FormRoom />
            </React.Suspense>
          } />
          <Route path="curso" element={
            <React.Suspense fallback={<p>Carregando...</p>}>
              <FormClass />
            </React.Suspense>
          } />
          <Route path="periodo" element={
            <React.Suspense fallback={<p>Carregando...</p>}>
              <FormPeriod />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
