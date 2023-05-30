import React from 'react'
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
// import GroupIcon from '@mui/icons-material/Group';
// import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ManIcon from '@mui/icons-material/Man';
import GamesIcon from '@mui/icons-material/Games';
import HomeCss from '../css/stileHome.module.css'
import Test from '../contenitore';

function Utilita() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Test></Test>
      {/* <Divider textAlign="left" style={{marginTop:"20px", fontWeight:'bold', fontSize:30}}>GESTIONE UTENTI</Divider>
        <Stack direction="row" spacing={6} style={{marginLeft:"200px", marginTop:"10px"}}>
        <Fab variant="extended">
        <Link to="/visualizzazioneUtente" className={HomeCss.bottoniUtilita} >
        <GroupIcon sx={{ mr: 1 }} />
        Visualizza utenti
      </Link>
      </Fab>
      <Fab variant="extended" style={{width:"300px"}}>
        <Link to="/inserimentoUtente" className={HomeCss.bottoniUtilita}>
        <AddIcon sx={{ mr: 1 }} />
        Inserisci un utente 
      </Link>
        </Fab>
        </Stack> */}
      <Divider textAlign="left" style={{ marginTop: "20px", fontWeight: 'bold', fontSize: 30 }}>UTILITA'</Divider>
      <Stack direction="row" spacing={2} style={{ marginLeft: "200px", marginTop: "10px" }}>
        {/* <Fab variant="extended">
        <Link to="/todo" className={HomeCss.bottoniUtilita}>
        <PlaylistAddCheckIcon sx={{ mr: 1 }} />
        TO-DO
      </Link>
      </Fab> */}
        <Fab variant="extended">
          <Link to="/giochi" className={HomeCss.bottoniUtilita}>
            <GamesIcon sx={{ mr: 1 }} />
            GIOCHI
          </Link>
        </Fab>
        <Fab variant="extended">
          <Link to="/steam" className={HomeCss.bottoniUtilita}>
            <GamesIcon sx={{ mr: 1 }} />
            STEAM
          </Link>
        </Fab>
      </Stack>
      <Divider textAlign="left" style={{ marginTop: "20px", fontWeight: 'bold', fontSize: 30 }}>ALBION ONLINE</Divider>
      <Stack direction="row" spacing={2} style={{ marginLeft: "200px", marginTop: "10px" }}>
        <Fab variant="extended">
          <Link to="/albionOnlinePrezzi" className={HomeCss.bottoniUtilita}>
            <PriceChangeIcon sx={{ mr: 1 }} />
            PREZZI OGETTI
          </Link>
        </Fab>
        <Fab variant="extended">
          <Link to="/albionOnlineDeaths" className={HomeCss.bottoniUtilita}>
            <ManIcon sx={{ mr: 1 }} />
            KILL & DEATHS
          </Link>
        </Fab>
        {/* <Fab variant="extended">
        <Link to="/albionOnlineBuilds" className="bottoniUtilita">
        <ManIcon sx={{ mr: 1 }} />
        ALBION BUILDS
      </Link>
      </Fab> */}
      </Stack>
    </div>

  )
}

export default Utilita