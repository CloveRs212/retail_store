import { Routes, Route } from 'react-router-dom';

import Navigation from './components/routes/navigation/navigation.components';
import Home from "./components/routes/home/home.component";
import SignIn from './components/routes/sign-in/sign-in.components';


const Shop = () => {
  return (
    <h1>I am the Shop Page</h1>
  )
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='Shop' element={<Shop />} />
        <Route path='Sign-In' element={<SignIn />} />
      </Route>
    </Routes>
    );
};

export default App;
