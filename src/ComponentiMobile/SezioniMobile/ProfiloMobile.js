import React from 'react';
import { Grid, Link } from '@mui/material'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
//CSS
import mainStyles from '../Css/generalCss.module.css'
import styles from '../Css/homeMobile.module.css'
//ICONE
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
//IMMAGINI
import ImmagineProfilo from '../Assets/fotoProfilo.jpg'

function ProfiloMobile() {
    return ( 
        <Grid container className={mainStyles.elementFade} style={{marginTop:150}}>
            <Grid item >
                <Card className={styles.cardPersonale} style={{ overflow: 'visible' }}>
                    <Grid spacing={4} justifyContent="center" container>
                        <Grid item lg={8.1}>
                            <Box
                                className={styles.immagine}
                                component="img"
                                style={{ marginTop: -120 }}
                                src={ImmagineProfilo}
                                sx={{
                                    height: 300,
                                    width: 330,
                                    maxHeight: { xs: 300, md: 300 },
                                    maxWidth: { xs: 440, md: 440 },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid spacing={4} justifyContent="center" container>
                        <Grid item lg={12}>
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 30 }}>Emanuele Manniti</span>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <Grid spacing={4} justifyContent="center" container>
                                <Grid item lg={12}>
                                    <Card className={styles.knowledgesCard}>
                                        <span style={{ fontSize: 20, color: '#a6a69e' }}>Web Developer</span>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: -20 }}>
                            <Grid container>
                                <Grid item xs={6} style={{ textAlign: 'right' }}>
                                    <Link href="https://www.linkedin.com/in/emanuele-manniti-338360183/">
                                        <Button className={styles.iconeLink} variant="text"><LinkedInIcon style={{ color: 'white' }} fontSize='large' /></Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={5} style={{ textAlign: 'left', marginLeft: 10 }}>
                                    <Link href="https://github.com/Emanniti">
                                        <Button className={styles.iconeLink} variant="text"><GitHubIcon style={{ color: 'white' }} fontSize='large' /></Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Card className={styles.knowledgesCard}>
                                <List>
                                    <ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <LocationOnIcon className={styles.iconeAreaPersonaleLocation} fontSize='medium' />
                                        </ListItemAvatar>
                                        <Grid container>
                                            <Grid xs={12} item>
                                                <ListItemText
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="#a6a69e"
                                                                style={{ fontSize: 14, marginLeft: -30 }}
                                                            >
                                                                Location
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </Grid>
                                            <Grid xs={12} item>
                                                <ListItemText
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="white"
                                                                style={{ fontSize: 17, marginLeft: -30 }}
                                                            >
                                                                Italy Naples(NA)
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <Divider variant="middle" style={{ background: '#a6a69e' }} component="li" />
                                    <ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <EmailIcon className={styles.iconeAreaPersonaleMail} fontSize='medium' />
                                        </ListItemAvatar>
                                        <Grid container>
                                            <Grid xs={12} item>
                                                <ListItemText
                                                    style={{ fontSize: 30 }}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="#a6a69e"
                                                                style={{ fontSize: 14, marginLeft: -30 }}
                                                            >
                                                                Email
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </Grid>
                                            <Grid xs={12} item>
                                                <ListItemText
                                                    style={{ fontSize: 30 }}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="white"
                                                                style={{ fontSize: 17, marginLeft: -30 }}
                                                            >
                                                                mannitiemanuele@gmail.com
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <Divider variant="middle" style={{ background: '#a6a69e' }} component="li" />
                                    <ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <CalendarMonthIcon className={styles.iconeAreaPersonaleBirthday} fontSize='medium' />
                                        </ListItemAvatar>
                                        <Grid container>
                                            <Grid xs={12} item>
                                                <ListItemText
                                                    style={{ fontSize: 30 }}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="#a6a69e"
                                                                style={{ fontSize: 14, marginLeft: -30 }}
                                                            >
                                                                Birthday
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </Grid>
                                            <Grid xs={12} item>
                                                <ListItemText
                                                    style={{ fontSize: 30 }}
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="white"
                                                                style={{ fontSize: 17, marginLeft: -30 }}
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
                        <Grid item xs={12} style={{ marginBottom: 20, textAlign: 'center' }}>
                            <a style={{ textDecoration: 'inherit' }} href={ImmagineProfilo} download><Button className={styles.bottoneDownloadCv} variant="text"><span style={{ fontWeight: 'bold' }}>DOWNLOAD CV</span></Button></a>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
     );
}

export default ProfiloMobile;