
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Subjects from './Components/Subjects/Subjects.jsx'
import Announcements from './Components/Announcements/Announcements.jsx'
import Schedule from './Components/Schedule/Schedule.jsx'
import Faculty from './Components/Faculty/Faculty.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Profile from './Components/Profile/Profile.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'


let routers = createBrowserRouter([{
  path:'' , element : <Layout/>,children:[
    {index: true , element: <Register/>},
    {path:'login' , element: <Login/>},
    {path:'dashboard' , element: <Dashboard/>},
    {path:'subjects' , element: <Subjects/>},
    {path:'schedule' , element: <Schedule/>},
    {path:'announcements' , element: <Announcements/>},
    {path:'faculty' , element: <Faculty/>},
    {path:'profile' , element: <Profile/>},
    {path:'*' , element: <NotFound/>},
  ]
}])
function App() {

  return <>

    <RouterProvider router={routers}></RouterProvider>

  </>
}

export default App
