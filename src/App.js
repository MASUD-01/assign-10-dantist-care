import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Aboutme from './components/Aboutme/Aboutme';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import KnowDetails from './components/KnowDetails/KnowDetails';
import NotFound from './components/NotFound/NotFound';
import Checkouts from './components/Checkouts/Checkouts';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/knowdetails' element={<KnowDetails></KnowDetails>}></Route>
        <Route path='/checkouts' element={
          <RequireAuth>
            <Checkouts></Checkouts>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
