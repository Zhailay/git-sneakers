
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
<<<<<<< HEAD
import NotFound from './pages/NotFound';
import './scss/app.scss';
import { createContext, useState } from 'react';
=======
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import { createContext, useState } from 'react';
import Sneaker from './pages/Sneaker';
>>>>>>> 64891dd (Add Sneaker page)

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
<<<<<<< HEAD
=======
            <Route path='/:id' element={<Sneaker />} />
            <Route path='/cart' Component={Cart} />
>>>>>>> 64891dd (Add Sneaker page)
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
