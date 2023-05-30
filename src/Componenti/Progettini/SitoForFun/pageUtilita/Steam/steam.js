import React, { useEffect } from "react";
import axios from "axios";
import { Grid, InputLabel, styled } from "@mui/material";
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import SteamCss from '../../css/steam.module.css'
import CardSteam from "./CardSteam";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: '#0197cf',
    },
    '& label.Mui-focused': {
        color: '#0197cf',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#0197cf',
        },
        '&:hover fieldset': {
            borderColor: '#0197cf',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0197cf',
        },
    },
});

function SteamHome() {
    const [items, setItems] = React.useState(null);
    const [games, setGames] = React.useState(null);
    const [steamId, setSteamId] = React.useState("");
    const [showStats, setShowStats] = React.useState(false);



    useEffect(() => {
        document.body.classList.add(SteamCss.bodySteam);
        return () => {
            document.body.classList.remove(SteamCss.bodySteam);
        }
    }, []);

    async function handleFiltra() {
        // let url = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=FB401232604477A3C8B1A14958177736&steamid=76561198079612239&include_appinfo=true&include_played_free_games=true&format=json"
        // let urlProfilo = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=FB401232604477A3C8B1A14958177736&steamids=" + steamId
        // let urlGiochi = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=FB401232604477A3C8B1A14958177736&steamid=" + steamId + "&include_appinfo=true&include_played_free_games=true&format=json"
        // https://nodejs-serverless-function-express-emanniti.vercel.app/api/getSteamUser?steamId=76561198079612239
        let urlProfilo = "https://nodejs-serverless-function-express-chi-ashen.vercel.app/api/getSteamUser";
        let urlGiochi = "https://nodejs-serverless-function-express-chi-ashen.vercel.app/api/getSteamGames";

        setItems(null);
        setGames(null);
        setSteamId("");

        axios.get(urlProfilo, {
            params: {
                steamId: steamId
            }
        }).then((response) => {
            setItems(response.data.response.players[0]);
        });

        axios.get(urlGiochi, {
            params: {
                steamId: steamId
            }
        }).then((response) => {
            setGames(response.data.response);
            setShowStats(true)
        });



    }

    function handleSteamId(params) {
        setSteamId(params.target.value)
    }

    function scrollTop() {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={SteamCss.test}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className={SteamCss.appBarCss}>
                    <Toolbar>
                        <Button color="inherit"><span style={{ fontWeight: "bold" }}>Login</span></Button>
                        <Button color="inherit"><span style={{ fontWeight: "bold" }}>Login</span></Button>
                        <Button color="inherit"><span style={{ fontWeight: "bold" }}>Login</span></Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid container justifyContent={"center"} spacing={2}>
                <Grid item style={{ marginTop: 20 }}>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        <span style={{ color: "white" }}>Steam ID</span>
                    </InputLabel>
                    <CssTextField onChange={e => handleSteamId(e)}></CssTextField>
                </Grid>
                <Grid item style={{ marginTop: 50 }}>
                    <Button onClick={() => handleFiltra()} style={{ backgroundColor: "black" }}><span style={{ color: "white" }}>Cerca</span></Button>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    {showStats === false ? <h1><span style={{ color: "white" }}>Nessun giocatore trovato...</span ></h1> : <CardSteam
                        fotoProfilo={items.avatarfull}
                        nome={items.personaname}
                        nomeReale={items.realname}
                        url={items.profileurl}
                        stato={items.personastate}
                        ultimaVoltaOnline={items.lastlogoff}
                        giochi={games.games}
                        giochiTotali={games.game_count}>
                    </CardSteam>}
                </Grid>
            </Grid>
            <div className={SteamCss.tornaSu}><Button onClick={() => scrollTop()}>torna su </Button></div>

        </div>
    );
}

export default SteamHome;