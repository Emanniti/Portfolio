import React, { useState } from 'react'
import { Box, DialogContent, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from '../Css/portfolio.module.css'
import mainStyles from '../Css/resume.module.css'
import resume from '../Css/resume.module.css'
import Sito1 from '../../Assets/sito1.png'
import Sito1Home from '../../Assets/sito1home.png'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


function Portfolio() {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <CardContent className={[mainStyles.resumeBackground, mainStyles.elementToFadeInAndOut]}>
                <Dialog maxWidth='lg' className={styles.dialog} open={open} onClose={handleClose}>
                    <DialogTitle style={{ backgroundColor: '#323232', textAlign: 'center', fontWeight: 'bold' }}><span className={mainStyles.robotoFont} style={{ color: '#fa5252', marginLeft: 10, fontSize: 25 }}>Website Project</span></DialogTitle>
                    <DialogContent className={styles.dialog} style={{ backgroundColor: '#323232' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 30 }}>Project: Website</span>
                            </Grid>
                            <Grid item xs={6}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 200 }}>Client: CrowdMoovi</span>
                            </Grid>
                            <Grid item xs={6}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 30 }}>Languages: Java, Javascript</span>
                            </Grid>
                            <Grid item xs={6}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 200 }}>Preview: <a style={{ color: 'white' }} rel="noreferrer" href="https://crowdmoovi.com/" target="_blank">crowdmoovi.com</a></span>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 20 , paddingLeft: 30}}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18 }}>CrowdMoovi ed il suo Marketplace NFT permettono agli artisti nel
                                    mondo del cinema come registi, sceneggiatori, attori e molti altri di
                                    finanziare i propri prodotti cinematografici tramite la vendita di
                                    NFTs Cards che offrono vantaggi collegati al prodotto finale. Oltre
                                    a questi vantaggi, ad ogni NFT venduto il team artistico associa una
                                    frazione dei diritti d'autore sull'opera.</span>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    style={{ marginLeft: 10, marginRight: 10, borderRadius: '2rem' }}
                                    className={styles.immagine}
                                    component="img"
                                    src={Sito1Home}
                                    sx={{
                                        height: 500,
                                        width: 1150,
                                        maxHeight: { xs: 600, md: 600 },
                                        maxWidth: { xs: 1200, md: 1200 },
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </DialogContent>
                </Dialog>
                <Grid container>
                    <Grid container justifyContent='flex-start' style={{ marginLeft: 50 }}>
                        <Grid item lg={3.5} xs={6} >
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 50 }}>Portfolio </span>
                        </Grid>
                        <Grid item lg={4} xs={4}>
                            <hr className={resume.lineaPortfolio}/>
                        </Grid>
                    </Grid>
                    <Grid contaier justifyContent="left" spacing={2} style={{ marginLeft: 30 }}>
                        <Grid item lg={6} xs={6} style={{ marginTop: 50 }}>
                            <Card elevation={3} className={styles.portfolioCard}>
                                <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                    <Grid item lg={7} xs={6} style={{ marginTop: 10 }}>
                                        <Box
                                            style={{ marginLeft: 10, marginRight: 10 }}
                                            onClick={handleOpen}
                                            className={styles.immagine}
                                            component="img"
                                            src={Sito1}
                                            sx={{
                                                height: 200,
                                                width: 250,
                                                maxHeight: { xs: 600, md: 600 },
                                                maxWidth: { xs: 900, md: 900 },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item lg={7} xs={7} style={{ marginTop: 10 }}>
                                        <span className={styles.robotoFont} style={{ color: '#a6a6a6', marginLeft: 10, fontSize: 25 }}>Website</span>
                                    </Grid>
                                    <Grid item lg={6} xs={6} style={{ marginTop: 10 }}>
                                        <span className={styles.robotoFont} style={{ color: 'white', marginLeft: 10, fontSize: 25 }}>CrowdMoovi</span>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

            </CardContent>
        </div>
    );
}

export default Portfolio;