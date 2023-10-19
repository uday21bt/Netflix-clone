import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './Context/AuthContext'

const App = () => {
  return (
      <>
      <AuthContextProvider>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>  } />
        </Routes>   
        </AuthContextProvider>
      </>
  )
}

export default App  