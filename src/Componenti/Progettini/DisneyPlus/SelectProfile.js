import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material';
//CSS
import mainCss from '../progettiniCss/main.module.css'

const profili = [{ urlImmagine: "", nomeProfilo: "Emanuele" }, { urlImmagine: "", nomeProfilo: "Francesca" }, { urlImmagine: "", nomeProfilo: "Ospite" }]

function SelectProfile() {

    let navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add(mainCss.bodyDisney);
        return () => {
            document.body.classList.remove(mainCss.bodyDisney);
        }
    }, []);

    const handleSelezionaProfilo = (nomeUtente) => {
        navigate("/disneyPlus/films", { replace: true, state: { nome: nomeUtente } });
    }

    return (
        <div>

            <AppBar style={{ backgroundColor: '#1a1d29' }} elevation={0} position="absolute">
                <Toolbar>
                    <img
                        className={mainCss.immagine}
                        src={`https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg`}
                        srcSet={`https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg`}
                        loading="lazy"
                        alt=''
                    />
                </Toolbar>
            </AppBar>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
                <Grid container textAlign='center'>
                    {/* TESTI */}
                    <Grid item textAlign='center' xs={12}>
                        <Typography style={{ color: 'white' }} variant="h4" gutterBottom>
                            Chi sta guardando?
                        </Typography>
                    </Grid>
                    <Grid item textAlign='center' style={{marginTop:'90px'}} xs={12}>
                        <Stack direction="row" textAlign='center'>
                            <Grid container textAlign='center' justifyContent='center' spacing={0}>
                                {profili.map(profilo => (
                                    <Grid item xs={1} textAlign='center' >
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <IconButton onClick={() => handleSelezionaProfilo(profilo.nomeProfilo)} aria-label="delete">
                                                    <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} src={profilo.urlImmagine} />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography style={{ color: 'white' }} variant="h6" gutterBottom>
                                                    {profilo.nomeProfilo}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SelectProfile;