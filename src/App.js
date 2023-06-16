
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import { createContext, useState } from 'react';
import Sneaker from './pages/Sneaker';

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Sneaker />} />
            <Route path='/cart' Component={Cart} />
            <Route path='*' Component={NotFound} />
          </Routes>
          {/* <Home/>
        <NotFound/> */}
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
