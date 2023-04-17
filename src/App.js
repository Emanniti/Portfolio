import './index.css';
import Home from './Componenti/Home';
// import { Grid } from '@mui/material';
// import HomeMobile from './ComponentiMobile/HomeMobile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DisneyPlus from './Componenti/Progettini/DisneyPlus/DisneyPlus';
// import SelectProfile from './Componenti/Progettini/DisneyPlus/SelectProfile';
// import FilmsDisney from './Componenti/Progettini/DisneyPlus/FilmsDisney';
import RedirectForMobile from './RedirectForMobile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RedirectForMobile />} />
        {/* DISNEY PLUS */}
        {/* <Route path="/disneyPlus" element={<DisneyPlus />} />
        <Route path="/disneyPlus/selectProfile" element={<SelectProfile />} />
        <Route path="/disneyPlus/films" element={<FilmsDisney />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
