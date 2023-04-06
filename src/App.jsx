import { Route, Routes } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { AuthContextProvider } from './context/AuthContext';
import Home from './Pages/Home';
import Login from './Pages/login';
import Signup from './Pages/SignUp';
import Account from './Pages/Account';
import ProtectedRoute from './Layout/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={
              <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;