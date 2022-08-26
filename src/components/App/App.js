import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Main from '../Main/Main';
import { FavProvider } from '../../context/FavContext';

export default function App(props) {
  const name = 'Star Wars API';
  const [keyword, setKeyword] = useState("");
  const [disabled, setDisabled] = useState(true);

  function saveSearch(keyword) {
    setKeyword(keyword);
  }

  function setSearchState(state) {
    setDisabled(state);
  }

  return (
    <FavProvider>
      <div className="App">
        <Router>
          <Header company={name} />
          <SearchBar keyword={keyword} saveSearch={saveSearch} btnState={disabled} />

          <main className="content">
            <Main keyword={keyword} setSearchState={setSearchState} />
          </main>
        </Router>
      </div>
    </FavProvider>
  );
}
