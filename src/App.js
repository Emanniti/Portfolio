import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisneyPlus from './Componenti/Progettini/DisneyPlus/DisneyPlus';
import SelectProfile from './Componenti/Progettini/DisneyPlus/SelectProfile';
import FilmsDisney from './Componenti/Progettini/DisneyPlus/FilmsDisney';
import RedirectForMobile from './RedirectForMobile';
import FootballHome from './Componenti/Progettini/Football/FootballHome';
import Utilita from './Componenti/Progettini/SitoForFun/categorie/utilita';
import InserimentoUtente from './Componenti/Progettini/SitoForFun/pageUtilita/inserimentoUtente';
import VisualizzazioneUtente from './Componenti/Progettini/SitoForFun/pageUtilita/visualizzazioneUtente';
import Todo from './Componenti/Progettini/SitoForFun/pageUtilita/todo';
import Giochi from './Componenti/Progettini/SitoForFun/pageUtilita/giochi';
import AlbionOnlinePrezzi from './Componenti/Progettini/SitoForFun/pageUtilita/albionOnline/albionOnlinePrezzi';
import AlbionOnlineDeaths from './Componenti/Progettini/SitoForFun/pageUtilita/albionOnline/albionOnlineDeaths';
import AlbionOnlineBuilds from './Componenti/Progettini/SitoForFun/pageUtilita/albionOnline/albionOnlineBuilds';
import Layout from './Componenti/Progettini/SitoForFun/categorie/home';
import NoPage from './Componenti/Progettini/SitoForFun/categorie/nopage';
import SteamHome from './Componenti/Progettini/SitoForFun/pageUtilita/Steam/steam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RedirectForMobile />} />
        <Route path="/home" element={<RedirectForMobile />} />
        {/* DISNEY PLUS */}
        <Route path="/disneyPlus" element={<DisneyPlus />} />
        <Route path="/disneyPlus/selectProfile" element={<SelectProfile />} />
        <Route path="/disneyPlus/films" element={<FilmsDisney />} />
        {/* FOOTBALL */}
        <Route path="/football" element={<FootballHome />} />
        {/* SITO FOR FUN */}
        <Route path="/sitoForFun" element={<Layout />} />
        <Route path="/utilita" element={<Utilita />} />
        <Route path="/inserimentoUtente" element={<InserimentoUtente/>} />
        <Route path="/visualizzazioneUtente" element={<VisualizzazioneUtente/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/giochi" element={<Giochi/>} />
        <Route path="/albionOnlinePrezzi" element={<AlbionOnlinePrezzi/>} />
        <Route path="/albionOnlineDeaths" element={<AlbionOnlineDeaths/>} />
        <Route path="/albionOnlineBuilds" element={<AlbionOnlineBuilds/>} />
         {/* STEAM */}
        <Route path="/steam" element={<SteamHome/>} />
        {/* <Route path="/steam/playerStats" element={<SteamHome/>} />
        <Route path="/steam/" element={<SteamHome/>} />
        <Route path="/steam" element={<SteamHome/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
