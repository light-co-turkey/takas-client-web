import React from 'react';
import Loadable from 'react-loadable';

import Landing from './components/layout/Landing';
import constants from './shared/constants';
// import i18n from './i18n';

function Loading() {
  // return <div>{i18n.t('WAITING')}</div>;
  return <h1 style={{margin: 'auto', color: '#65A3FF'}}>WAITING</h1>;
}

const { USER_ROLES } = constants;

const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import('./components/SignUp'),
  loading: Loading,
});

const Profile = Loadable({
  loader: () => import('./views/Profile'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('./views/Home'),
  loading: Loading,
});

const Matches = Loadable({
  loader: () => import('./views/Matches'),
  loading: Loading,
});

const CreateProduct = Loadable({
  loader: () => import('./views/CreateProduct'),
  loading: Loading,
});

/* const Feed = Loadable({
  loader: () => import('./views/Home/Feed'),
  loading: Loading,
}); */

const routes = [
  {
    path: '/',
    name: 'LANDING',
    component: Landing,
    exact: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    exact: true,
  },
  {
    path: '/profile',
    name: 'PROFILE',
    component: Profile,
    exact: true,
    //allowed: [USER_ROLES.SUPER_USER],
  },
  {
    path: '/home',
    name: 'HOME',
    component: Home,
    exact: true,
    //allowed: [USER_ROLES.SUPER_USER],
  },
  {
    path: '/matches',
    name: 'MATCHES',
    component: Matches,
    exact: true,
    //allowed: [USER_ROLES.SUPER_USER],
  },
  {
    path: '/create-product',
    name: 'CREATE_PRODUCT',
    component: CreateProduct,
    exact: true,
    }
  
];

export default routes;
