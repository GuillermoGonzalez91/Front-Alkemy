import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignupForm from './components/signup/SignUp';
import TestimonyForm from './components/backoffice/testimonyForm/TestimonyForm';
import Activities from './pages/activities/Activities';
import Novelties from './pages/novelties/Novelties';
import Contact from './pages/contact/Contact';
import BackRouters from './components/backoffice/BackRouters';

import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import ActivityDetail from './pages/activityDetail/ActivityDetail';
import NewsDetail from './pages/newsDetail/NewsDetail';
import Testimonials from './pages/Testimonials/Testimonials';
import LoginPage from './pages/loginPage/LoginPage';
import Contribute from './pages/contribute/Contribute';

import './App.css';

const routes = [
  { path: '/', Component: Home },
  { path: '/nosotros', Component: AboutUs },
  { path: '/actividades', Component: Activities },
  { path: '/actividades/:id', Component: ActivityDetail },
  { path: '/contacto', Component: Contact },
  { path: '/testimonios', Component: Testimonials },
  { path: '/contribuye', Component: Contribute },
  { path: '/perfil', Component: Profile },
  { path: '/registrarse', Component: SignupForm },
  { path: '/login', Component: LoginPage },
  { path: '/novedades', Component: Novelties },
  { path: '/novedades/:id', Component: NewsDetail },
  { path: '/backoffice/:slug?/:id?', Component: BackRouters },
  { path: '/testimonyForm', Component: TestimonyForm },
];

function App() {
  return (
    <>
      <Header />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              classNames='page'
              in={match != null}
              timeout={500}
              unmountOnExit
            >
              <div className='page'>
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
      <Footer />
    </>
  );
}

export default App;
