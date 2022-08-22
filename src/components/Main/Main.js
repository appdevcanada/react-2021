import './main.css';
import Home from '../Home/Home';
import Sub from '../Sub/Sub';
import Films from '../Films/Films';
import People from '../People/People';
import Planets from '../Planets/Planets';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

export default function Main(props) {
  const {keyword} = props;
  const {setSearchState} = props;

  useEffect(() => {

  }, [keyword])

  return (
    <div className="mainContent">
      <Routes>
        <Route path="/films/*" element={<Films keyword={keyword} setSearchState={setSearchState} />} />
        <Route path="/planets/*" element={<Planets keyword={keyword} setSearchState={setSearchState} />} />
        <Route path="/people/*" element={<People keyword={keyword} setSearchState={setSearchState} />} />

        <Route
          exact
          path="/"
          element={<Home name={['C-3PO', 'R2-D2']} active={true} time={new Date() - 50000000} setSearchState={setSearchState}>
                <Sub />
                <Sub />
              </Home>} />
      </Routes>
    </div>
  );
}
