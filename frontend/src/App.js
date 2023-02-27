import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import NewPostPage from './pages/NewPostPage/NewPostPage';
import Navbar from './components/Navbar/Navbar'
import Leftbar from './components/Leftbar/Leftbar';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './style.scss'
import { useContext } from 'react';
import { ModeContext } from './context/modeContext';

function App() {
  const {darkMode}=useContext(ModeContext)
  
  const Layout=()=>{
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path: "/",
          element:<HomePage/>
        },
        {
          path: "/profile/:id",
          element:<ProfilePage/>
        },
        {
          path: "/new",
          element:<NewPostPage/>
        },
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
