import './index.css';
import Home from './Componenti/Home';
// import { Grid } from '@mui/material';
// import HomeMobile from './ComponentiMobile/HomeMobile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisneyPlus from './Componenti/Progettini/DisneyPlus/DisneyPlus';
import SelectProfile from './Componenti/Progettini/DisneyPlus/SelectProfile';
import FilmsDisney from './Componenti/Progettini/DisneyPlus/FilmsDisney';

function App() {
  return (
    // <Routes>
    //   <Grid item xs={12} md={1} lg={1} display={{ xs: 'initial', md: 'none' }}>
    //   <Route path="\" element={<HomeMobile />} />
    //   </Grid>
    //   <Grid item xs={12} sx={{ display: { xs: 'none', md: 'initial' } }}>
    //   <Route path="\" element={<Home />} />
    //   </Grid>
    // </Routes>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        {/* DISNEY PLUS */}
        <Route path="/disneyPlus" element={<DisneyPlus />} />
        <Route path="/disneyPlus/selectProfile" element={<SelectProfile />} />
        <Route path="/disneyPlus/films" element={<FilmsDisney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
