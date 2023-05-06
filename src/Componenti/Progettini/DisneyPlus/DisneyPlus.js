//REACT
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//MATERIAL UI
import { AppBar, Button, Divider, Grid, TextField, Toolbar, Typography } from '@mui/material';
import Box from "@mui/material/Box";
//MATERIAL STYLE
import { styled } from '@mui/material/styles';
//CSS
import mainCss from '../progettiniCss/main.module.css'

import resume from '../../Css/resume.module.css'

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#30333e',
        },
        '&:hover fieldset': {
            borderColor: '#30333e',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#30333e',
        },
    },
});

function DisneyPlus() {
    let navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    useEffect(() => {
        document.body.classList.add(mainCss.bodyDisney);
        document.body.classList.remove(resume.lineaPortfolio);
        
        return () => {
            document.body.classList.remove(mainCss.bodyDisney);
        }
    }, []);

    const handleLogin = () => {
        if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
            console.log("ACCESSO EFFETTUATO!!");
            alert("ACCESSO EFFETTUATO!!");
            navigate("selectProfile");
        } else {
            alert("Username o Password errati!");
            console.log("Username o Password errati!");
        }
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
                <Divider className={mainCss.rigaAppbar} />
            </AppBar>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
                <Grid container justifyContent='center' spacing={2}>
                    {/* TESTI */}
                    <Grid item textAlign='center' xs={12}>
                        <Typography style={{ color: 'white' }} variant="h4" gutterBottom>
                            Accedi con la tua email
                        </Typography>
                    </Grid>
                    <Grid item textAlign='left' xs={4}>
                        <Typography style={{ color: 'white' }} variant="h6" gutterBottom>
                            Utilizza questa combinazione di email e password per accedere al tuo account Disney+ e guardare i tuoi show e film preferiti.
                        </Typography>
                    </Grid>
                    {/* Form username */}
                    <Grid item textAlign='center' xs={12}>
                        <CssTextField onChange={(event) => {
                            setUsername(event.target.value);
                        }} style={{ backgroundColor: '#30333e', borderRadius: '0.5rem' }} InputLabelProps={{ style: { color: '#cacaca' } }} sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Username" variant="outlined" />
                    </Grid>
                    {/* Form password */}
                    <Grid item >
                        <CssTextField onChange={(event) => {
                            setPassword(event.target.value);
                        }} style={{ backgroundColor: '#30333e', borderRadius: '0.5rem' }} InputLabelProps={{ style: { color: '#cacaca' } }} sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Password" variant="outlined" />
                    </Grid>
                    <Grid item textAlign='center' xs={12}>
                        <Button onClick={() => handleLogin()} sx={{ m: 1, width: '52ch', height: '50px' }} variant="contained"><span style={{ fontWeight: 'bold' }}>Continua</span></Button>
                    </Grid>
                </Grid>
            </Box>
            {/* FOOTER */}
            <footer className={mainCss.footerDisneyPlusLoginScreen}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Grid container justifyContent='center' spacing={2} padding={3}>
                        <Grid item textAlign='center' xs={12}>
                            <img
                                className={mainCss.immagine}
                                src={`https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg`}
                                srcSet={`https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg`}
                                loading="lazy"
                                alt=''
                            />
                        </Grid>
                        <Grid item textAlign='center' xs={1}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Informativa Sulla Privacy
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={0.75}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Policy sui cookie
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={1.5}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Normativa sulla privacy in UE e in UK
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={0.50}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Assistenza
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={0.90}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Dispositivi supportati
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={0.50}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Chi siamo
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={1.5}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Pubblicita basata sugli interessi
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={0.85}>
                            <Typography style={{ color: 'white', fontSize: '12px' }} gutterBottom>
                                Gestisci preferenze
                            </Typography>
                        </Grid>
                        <Grid item textAlign='center' xs={12}>
                            <Typography style={{ color: '#cacaca', fontSize: '12px' }} gutterBottom>
                                © Disney. Tutti i diritti riservati.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </footer>
        </div>
    );
}

export default DisneyPlus;