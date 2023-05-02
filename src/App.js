import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useFetch } from './hooks/useFetch'
import Home from './pages/Home'
import Search from './pages/Search'

import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App