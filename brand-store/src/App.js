import { Routes, Route } from 'react-router-dom';

import Navigation from './components/routes/navigation/navigation.components';
import Home from "./components/routes/home/home.component";


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
      </Route>
    </Routes>
    );
};

export default App;
