import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component'
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
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
    );
};

export default App;
