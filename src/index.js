import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import {Provider} from 'react-redux';
import store from './store'

import CssBaseline from '@mui/material/CssBaseline';

import Home from './routes/home';
import Auth from './routes/auth';
import Shop from './routes/shop';
import MyPage from './routes/myPage';
import Contact from './routes/contact';
import SignUp from './routes/signUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "mypage",
    element: <MyPage />,
  },
  {
    path: "member/join",
    element: <SignUp />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CssBaseline />
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </Provider>
);

