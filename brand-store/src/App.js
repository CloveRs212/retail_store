import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.components';
import Home from "./routes/home/home.component";
import SignIn from './routes/sign-in/sign-in.components'
import './App.scss';

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
