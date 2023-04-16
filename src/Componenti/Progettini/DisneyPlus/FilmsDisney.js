import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import mainCss from '../progettiniCss/main.module.css'
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import cssFilms from './CssDisney/filmsDisney.module.css'

function FilmsDisney() {

    const { state } = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add(mainCss.bodyDisney);
        return () => {
            document.body.classList.remove(mainCss.bodyDisney);
        }
    }, []);

    const handleExit = () => {
        navigate("/disneyPlus/selectProfile", { replace: true });
    }


    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
            <AppBar className={cssFilms.appBar} elevation={0} position="absolute">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={1}>
                            <img
                                className={mainCss.immagine}
                                src={`https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg`}
                                srcSet={`https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg`}
                                loading="lazy"
                                alt=''
                            />
                        </Grid>
                        <Grid item xs={0.2} style={{ paddingTop: '20px' }}>
                            <IconButton onClick={null} aria-label="delete">
                                <HomeIcon style={{ paddingTop: 0, color:'white' }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={0.5} style={{ paddingTop: '15px' }}>
                            <IconButton onClick={null} aria-label="delete">
                                <Typography style={{ color: 'white' }} variant="h6" gutterBottom>
                                    Home
                                </Typography>
                            </IconButton>
                        </Grid>
                        <Grid item xs={0.2} style={{ paddingTop: '20px' }}>
                            <IconButton onClick={null} aria-label="delete">
                                <SearchIcon style={{ paddingTop: 0, color:'white' }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={9} style={{ paddingTop: '15px' }}>
                            <IconButton onClick={null} aria-label="delete">
                                <Typography style={{ color: 'white' }} variant="h6" gutterBottom>
                                    Cerca
                                </Typography>
                            </IconButton>
                        </Grid>
                        <Grid item style={{ paddingTop: '25px', marginRight: 12 }}>
                            <span>{state.nome}</span>
                        </Grid>
                        <Grid item style={{ paddingTop: '15px' }}>
                            <Button onClick={() => handleExit()} variant="outlined">ESCI</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default FilmsDisney;