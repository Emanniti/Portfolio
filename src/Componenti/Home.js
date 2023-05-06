//REACT
import React, { useState, useEffect } from 'react'
import Curriculum from '../Assets/CV - Emanuele Manniti.pdf'
//IMMAGINI
import ImmagineProfilo from '../Assets/fotoProfilo.jpg'
//COMPONENTI MATERIAL
import { Grid, Link } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
//ICONE
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
//CSS
import styles from '../Componenti/Css/styles.module.css'
import resume from '../Componenti/Css/resume.module.css'
//SEZIONI
import Resume from './Sezioni/Resume';
import AboutMe from './Sezioni/AboutMe';
import Portfolio from './Sezioni/Portfolio';

export default function Home() {

    useEffect(() => {
        document.body.classList.add(styles.test);
        return () => {
            document.body.classList.remove(styles.test);
            document.body.classList.remove(resume.lineaPortfolio);
        }
    }, []);

    const [sezione, setsezione] = useState(<AboutMe />);

    function handleClickSection(sezione) {
        switch (sezione) {
            case "AboutMe":
                setsezione(<AboutMe />)
                break;
            case "Resume":
                setsezione(<Resume />)
                break;
            case "Portfolio":
                setsezione(<Portfolio />)
                break;
            default:
                console.log("nessuna sezione selezionata!")
                break;
        }
    }

    return (
        <div className={styles.bodyHome}>
            <Grid container>
                <Grid justifyContent="center" container>
                    <Grid item style={{ marginTop: 70}} xs={3}>
                        <AppBar className={styles.appBar} position="relative">
                            <Toolbar>
                                <Grid style={{ textAlign: 'center' }} container>
                                    <Grid item xs={4}>
                                        <Button onClick={() => handleClickSection("AboutMe")} className={styles.iconeAppBar} variant="text"><HomeOutlinedIcon className={styles.iconaHome} fontSize='large' /> </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button onClick={() => handleClickSection("Resume")} className={styles.iconeAppBar} variant="text"><ArticleIcon className={styles.iconaHome} fontSize='large' /></Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button onClick={() => handleClickSection("Portfolio")} className={styles.iconeAppBar} variant="text"><WorkIcon className={styles.iconaHome} fontSize='large' /></Button>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={6} lg={4.5} >
                        <Grid container >
                            <Grid item >
                                <Card className={styles.cardPersonale} style={{ overflow: 'visible' }}>
                                    <Grid spacing={4} justifyContent="center" container>
                                        <Grid item lg={8}>
                                            <Box
                                                className={styles.immagine}
                                                component="img"
                                                style={{ marginTop: -120 }}
                                                src={ImmagineProfilo}
                                                sx={{
                                                    height: 220,
                                                    width: 250,
                                                    maxHeight: { xs: 300, md: 300 },
                                                    maxWidth: { xs: 440, md: 440 },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid spacing={4} justifyContent="center" container>
                                        <Grid item lg={12}>
                                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 30, marginLeft: 70 }}>Emanuele Manniti</span>
                                        </Grid>
                                        <Grid item lg={7}>
                                            <Grid spacing={4} justifyContent="center" container>
                                                <Grid item lg={10}>
                                                    <Card className={styles.knowledgesCard}>
                                                        <span style={{ fontSize: 20, color: '#a6a69e' }}>Web Developer</span>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={7} style={{ marginTop: -20 }}>
                                            <Grid spacing={1} justifyContent="center" container>
                                                <Grid item xs={5}>
                                                    <Link target="_blank" href="https://www.linkedin.com/in/emanuele-manniti-338360183/">
                                                        <Button className={styles.iconeLink} variant="text"><LinkedInIcon className={styles.iconaHome} fontSize='large' /></Button>
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Link target="_blank" href="https://github.com/Emanniti">
                                                        <Button className={styles.iconeLink} variant="text"><GitHubIcon className={styles.iconaHome} fontSize='large' /></Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={10}>
                                            <Card className={styles.knowledgesCard}>
                                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                                    <ListItem alignItems="center">
                                                        <ListItemAvatar>
                                                            <LocationOnIcon className={styles.iconeAreaPersonaleLocation} fontSize='large' />
                                                        </ListItemAvatar>
                                                        <Grid container>
                                                            <Grid lg={12} item>
                                                                <ListItemText
                                                                    style={{ fontSize: 30 }}
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="#a6a69e"
                                                                                style={{ fontSize: 15 }}
                                                                            >
                                                                                Location
                                                                            </Typography>
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </Grid>
                                                            <Grid lg={12} item>
                                                                <ListItemText
                                                                    style={{ fontSize: 30 }}
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="white"
                                                                                style={{ fontSize: 15 }}
                                                                            >
                                                                                Italy Naples(NA)
                                                                            </Typography>
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>
                                                    <Divider variant="inset" style={{ background: '#a6a69e' }} component="li" />
                                                    <ListItem alignItems="center">
                                                        <ListItemAvatar>
                                                            <EmailIcon className={styles.iconeAreaPersonaleMail} fontSize='large' />
                                                        </ListItemAvatar>
                                                        <Grid container>
                                                            <Grid lg={12} item>
                                                                <ListItemText
                                                                    style={{ fontSize: 30 }}
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="#a6a69e"
                                                                                style={{ fontSize: 15 }}
                                                                            >
                                                                                Email
                                                                            </Typography>
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </Grid>
                                                            <Grid lg={12} item>
                                                                <ListItemText
                                                                    style={{ fontSize: 30 }}
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="white"
                                                                                style={{ fontSize: 13 }}
                                                                            >
                                                                                mannitiemanuele@gmail.com
                                                                            </Typography>
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>
                                                    <Divider variant="inset" style={{ background: '#a6a69e' }} component="li" />
                                                    <ListItem alignItems="center">
                                                        <ListItemAvatar>
                                                            <CalendarMonthIcon className={styles.iconeAreaPersonaleBirthday} fontSize='large' />
                                                        </ListItemAvatar>
                                                        <Grid container>
                                                            <Grid lg={12} item>
                                                                <ListItemText
                                                                    style={{ fontSize: 30 }}
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="#a6a69e"
                                                                                style={{ fontSize: 15 }}
                                                                            >
                                                                                Birthday
                                                                            </Typography>
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </Grid>
                                                            <Grid lg={12} item>
                                                                <ListItemText
                                                                    style={{ fontSize: 30 }}
                                                                    secondary={
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                sx={{ display: 'inline' }}
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="white"
                                                                                style={{ fontSize: 15 }}
                                                                            >
                                                                                Italy Naples(NA)
                                                                            </Typography>
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>
                                                </List>
                                            </Card>
                                        </Grid>
                                        <Grid item lg={7} style={{ marginBottom: 20 }}>
                                            <a style={{ textDecoration: 'inherit' }} href={Curriculum} download><Button className={styles.bottoneDownloadCv} variant="text"><span style={{ fontWeight: 'bold' }}>DOWNLOAD CV</span></Button></a>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={5} lg={6} style={{ marginTop: 40 }}>
                        <Card className={styles.componentePrincipale}>
                            {sezione}
                        </Card>
                    </Grid>
                </Grid>
            </Grid>



        </div>
    )
}
