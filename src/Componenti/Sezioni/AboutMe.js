//REACT
import React from 'react'
//MATERIAL UI
import { Box, Card, Grid, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent';
//CSS
import styles from '../Css/aboutMe.module.css'
import mainStyles from '../Css/resume.module.css'
import resume from '../Css/resume.module.css'
//IMMAGINI LOGO
import LogoAccenture from '../../Assets/accenture-transparent.png'
import LogoMatrix from '../../Assets/logo.png'
//ICONE
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import DataArrayIcon from '@mui/icons-material/DataArray';



function AboutMe() {

    return (
        <div>
            <CardContent className={[mainStyles.resumeBackground, mainStyles.elementToFadeInAndOut]}>
                <Grid container>
                    <Grid container justifyContent='flex-start' style={{ marginLeft: 20 }}>
                        <Grid item xs={5} >
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 50 }}>About Me </span>
                        </Grid>
                        <Grid item xs={4}>
                            <hr className={resume.lineaPortfolio} />
                        </Grid>
                    </Grid>
                    <Grid contaier>
                        <Grid item>
                            <Typography style={{ fontWeight: 'bold', color: '#a6a6a6', fontSize: 20, marginTop: 2, marginLeft: 20 }}>
                                Hi, I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of tailor-made websites.
                                <br />
                                At the moment I work for <span style={{ color: 'orange' }}><a style={{ color: 'orange', textDecoration: 'inherit' }} rel="noreferrer" href="https://matrixconsulting.it/" target="_blank">Matrix Consulting Group s.r.l.  </a></span>
                                as a consultant for <span style={{ color: '#a200fc' }}><a style={{ color: '#a200fc', textDecoration: 'inherit' }} rel="noreferrer" href="https://www.accenture.com" target="_blank">Accenture Technology Solutions </a></span>.
                            </Typography>
                        </Grid>
                        <Grid item lg={12} xs={12} style={{ marginTop: 40 }}>
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 40, marginLeft: 20 }}>What i do! </span>
                        </Grid>

                        <Grid container justifyContent="left" spacing={2} style={{ marginLeft: 10 }}>
                            <Grid item lg={5.5} xs={4} >
                                <Card elevation={3} className={styles.cosaFaccioCard}>
                                    <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                        <Grid item lg={1} xs={6} style={{ marginTop: 10, marginLeft: 10 }}>
                                            <DesignServicesIcon style={{ color: '#a200fc' }} fontSize='large'></DesignServicesIcon>
                                        </Grid>
                                        <Grid item lg={8} xs={6} style={{ marginTop: 10 }}>
                                            <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 25 }}>Ui/Ux Design</span>
                                        </Grid>
                                        <Grid item lg={12} xs={6} style={{ marginLeft: 10, }}>
                                            <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 17, }}>Ability to design a user interface. Design layouts and improve, modernize existing design environments.</span>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item lg={6} xs={4} >
                                <Card elevation={3} className={styles.cosaFaccioCard}>
                                    <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                        <Grid item lg={1} xs={6} style={{ marginTop: 10, marginLeft: 10 }}>
                                            <CodeIcon style={{ color: '#269fff' }} fontSize='large'></CodeIcon>
                                        </Grid>
                                        <Grid item lg={8} xs={6} style={{ marginTop: 10 }}>
                                            <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 25 }}>Web development</span>
                                        </Grid>
                                        <Grid item lg={12} xs={6} style={{ marginLeft: 10, }}>
                                            <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 17, }}>Good command of web programming languages (Javascript, Node.js) and the React framework.</span>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item lg={5.5} xs={4} >
                                <Card elevation={3} className={styles.cosaFaccioCard}>
                                    <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                        <Grid item lg={1} xs={6} style={{ marginTop: 10, marginLeft: 10 }}>
                                            <StorageIcon style={{ color: 'grey' }} fontSize='large'></StorageIcon>
                                        </Grid>
                                        <Grid item lg={8} xs={6} style={{ marginTop: 10 }}>
                                            <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 25 }}>Server management</span>
                                        </Grid>
                                        <Grid item lg={12} xs={6} style={{ marginLeft: 10, }}>
                                            <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 17, }}>Optimize the speed, stability, and scalability of servers and code.</span>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item lg={6} xs={4} >
                                <Card elevation={3} className={styles.cosaFaccioCard}>
                                    <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                        <Grid item lg={1} xs={6} style={{ marginTop: 10, marginLeft: 10 }}>
                                            <DataArrayIcon style={{ color: 'yellow' }} fontSize='large'></DataArrayIcon>
                                        </Grid>
                                        <Grid item lg={8} xs={6} style={{ marginTop: 10 }}>
                                            <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 25 }}>Data modeling</span>
                                        </Grid>
                                        <Grid item lg={12} xs={6} style={{ marginLeft: 10, }}>
                                            <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 17, }}>Data modeling for database storage, creation of API's for backend-frontend communication and saving it to the databases.</span>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item lg={12} xs={12} style={{ marginTop: 40 }}>
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 40, marginLeft: 50 }}>Who I work for: </span>
                        </Grid>
                        <Grid container justifyContent="center" spacing={1} >
                            <Grid item lg={6} xs={6} style={{ marginTop: 140 }}>
                                <a href="https://www.accenture.com" rel="noreferrer" target="_blank">
                                    <Box
                                        className={styles.immagine}
                                        component="img"
                                        style={{ marginTop: -120 }}
                                        src={LogoAccenture}
                                        sx={{
                                            height: 200,
                                            width: 330,
                                            maxHeight: { xs: 300, md: 300 },
                                            maxWidth: { xs: 440, md: 440 },
                                        }}
                                    />
                                </a>
                            </Grid>
                            <Grid item lg={6} xs={6} style={{ marginTop: 150 }}>
                                <a href="https://matrixconsulting.it/" rel="noreferrer" target="_blank">
                                    <Box
                                        className={styles.immagine}
                                        component="img"
                                        style={{ marginTop: -120 }}
                                        src={LogoMatrix}
                                        sx={{
                                            height: 110,
                                            width: 330,
                                            maxHeight: { xs: 300, md: 300 },
                                            maxWidth: { xs: 440, md: 440 },
                                        }}
                                    />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    );
}

export default AboutMe;