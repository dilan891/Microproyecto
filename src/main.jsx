import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { 
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  PROFILE_URL,
  MOVIELIST_URL
} from "../src/constants/urls";
import { Home } from "../src/pages/Home/Home";
import { Login } from "../src/pages/Login/Login";
import { Register } from "../src/pages/Register/Register";
import { MovieList } from "../src/pages/MovieList/MovieList";
import { Profile } from "../src/pages/Profile/Profile";
import { Layout } from "../src/pages/Layout/Layout";
import { NotFound } from "../src/pages/NotFound/NotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PublicRoute } from "../src/components/PublicRoute/PublicRoute"
import { PrivateRoute } from "../src/components/PrivateRoute/PrivateRoute"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={HOME_URL} element={<Home />} />
            <Route path={MOVIELIST_URL} element={<MovieList />} />
            <Route path={PROFILE_URL} element={<Profile />} />
          </Route>
          <Route path={LOGIN_URL} element={<Login />}/>
          <Route path={REGISTER_URL} element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
