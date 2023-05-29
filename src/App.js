import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisneyPlus from './Componenti/Progettini/DisneyPlus/DisneyPlus';
import SelectProfile from './Componenti/Progettini/DisneyPlus/SelectProfile';
import FilmsDisney from './Componenti/Progettini/DisneyPlus/FilmsDisney';
import RedirectForMobile from './RedirectForMobile';
import FootballHome from './Componenti/Progettini/Football/FootballHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RedirectForMobile />} />
        {/* DISNEY PLUS */}
        <Route path="/disneyPlus" element={<DisneyPlus />} />
        <Route path="/disneyPlus/selectProfile" element={<SelectProfile />} />
        <Route path="/disneyPlus/films" element={<FilmsDisney />} />
        {/* FOOTBALL */}
        <Route path="/football" element={<FootballHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
