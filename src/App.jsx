import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { useAuthContext } from './context/AuthContext'
import PageNotFound from './pages/home/PageNotFound'
import PrivateRoute from './pages/home/PrivateRoute'

function App() {

  const {authUser} = useAuthContext()
  console.log(authUser);
  return (
    <div className=' p-4 h-screen flex items-center justify-center'>
     <Routes>
      <Route path='/' element={<PrivateRoute> <Home /> </PrivateRoute>}  />
      <Route path='/login' element={authUser ? <Navigate to={"/"}/>: <Login />} />
      <Route path='/signup' element={authUser ?<Navigate to={"/"}/> : <SignUp />} />
      <Route path="*" component={<PageNotFound />} />
     </Routes>
    
    </div>
  )
}

export default App
