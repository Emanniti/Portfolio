//REACT
import React from 'react';
//MATERIAL UI
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
//CSS
import mainStyles from '../Css/generalCss.module.css'
import styles from '../Css/aboutMeMobile.module.css'
//ICONE
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import DataArrayIcon from '@mui/icons-material/DataArray';
//IMMAGINI
import LogoAccenture from '../../Assets/accenture-transparent.png'
import LogoMatrix from '../../Assets/logo.png'


function AboutMeMobile() {
    return (
        <div>
            <Card className={mainStyles.card} style={{marginTop:-10}}>
                <Grid container className={mainStyles.elementFade}>
                    <Grid item xs={12}>
                        <Grid container justifyContent='flex-start' style={{ marginLeft: 10, marginTop: 10 }}>
                            <Grid item xs={6} >
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 35 }}>About Me </span>
                            </Grid>
                            <Grid item xs={4}>
                                <hr />
                            </Grid>
                        </Grid>
                        <Grid contaier>
                            <Grid item xs={11}>
                                <Typography style={{ fontWeight: 'bold', color: '#a6a6a6', fontSize: 17, marginTop: 2, marginLeft: 30 }}>
                                    Hi, I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of tailor-made websites.
                                    <br />
                                    At the moment I work for <span style={{ color: 'orange' }}><a style={{ color: 'orange', textDecoration: 'inherit' }} href="https://matrixconsulting.it/" rel="noreferrer" target="_blank">Matrix Consulting Group s.r.l.  </a></span>
                                    as a consultant for <span style={{ color: '#a200fc' }}><a style={{ color: '#a200fc', textDecoration: 'inherit' }} href="https://www.accenture.com" rel="noreferrer" target="_blank">Accenture Technology Solutions </a></span>.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 40 }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 35, marginLeft: 10 }}>What i do! </span>
                            </Grid>
                            <Grid container justifyContent="left" spacing={2}>
                                <Grid item xs={10} >
                                    <Card elevation={3} className={styles.cosaFaccioCard}>
                                        <Grid container style={{ marginBottom: 10 }}>
                                            <Grid item xs={1} style={{ marginTop: 10, marginLeft: 10 }}>
                                                <DesignServicesIcon style={{ color: '#a200fc' }} fontSize='large'></DesignServicesIcon>
                                            </Grid>
                                            <Grid item xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 20 }}>Ui/Ux Design</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginLeft: 10, }}>
                                                <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 15, }}>Ability to design a user interface. Design layouts and improve, modernize existing design environments.</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={10} >
                                    <Card elevation={3} className={styles.cosaFaccioCard}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={1} style={{ marginTop: 10, marginLeft: 10 }}>
                                                <CodeIcon style={{ color: '#269fff' }} fontSize='large'></CodeIcon>
                                            </Grid>
                                            <Grid item xs={8} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 20 }}>Web development</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginLeft: 10, }}>
                                                <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 15, }}>Good command of web programming languages (Javascript, Node.js) and the React framework.</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={10} >
                                    <Card elevation={3} className={styles.cosaFaccioCard}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={1} style={{ marginTop: 10, marginLeft: 10 }}>
                                                <StorageIcon style={{ color: 'grey' }} fontSize='large'></StorageIcon>
                                            </Grid>
                                            <Grid item xs={10} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 20 }}>Server management</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginLeft: 10, }}>
                                                <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 15, }}>Optimize the speed, stability, and scalability of servers and code.</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={10} >
                                    <Card elevation={3} className={styles.cosaFaccioCard}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item xs={1} style={{ marginTop: 10, marginLeft: 10 }}>
                                                <DataArrayIcon style={{ color: 'yellow' }} fontSize='large'></DataArrayIcon>
                                            </Grid>
                                            <Grid item xs={8} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 20 }}>Data modeling</span>
                                            </Grid>
                                            <Grid item xs={12} style={{ marginLeft: 10, }}>
                                                <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 15, }}>Data modeling for database storage, creation of API's for backend-frontend communication and saving it to the databases.</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item lg={12} xs={12} style={{ marginTop: 10 }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 35, marginLeft: 10 }}>Who I work for: </span>
                            </Grid>
                            <Grid container justifyContent="left" spacing={5} >
                                <Grid item xs={4} style={{ marginTop: 90 }}>
                                    <a href="https://www.accenture.com" rel="noreferrer" target="_blank">
                                        <Box
                                            className={styles.immagine}
                                            component="img"
                                            style={{ marginTop: -120 }}
                                            src={LogoAccenture}
                                            sx={{
                                                height: 110,
                                                width: 150,
                                                maxHeight: { xs: 300, md: 300 },
                                                maxWidth: { xs: 440, md: 440 },
                                            }}
                                        />
                                    </a>
                                </Grid>
                                <Grid item xs={6} style={{ marginTop: 90 }}>
                                    <a href="https://matrixconsulting.it/" rel="noreferrer" target="_blank">
                                        <Box
                                            className={styles.immagine}
                                            component="img"
                                            style={{ marginTop: -90 }}
                                            src={LogoMatrix}
                                            sx={{
                                                height: 90,
                                                width: 200,
                                                maxHeight: { xs: 300, md: 300 },
                                                maxWidth: { xs: 440, md: 440 },
                                            }}
                                        />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default AboutMeMobile;