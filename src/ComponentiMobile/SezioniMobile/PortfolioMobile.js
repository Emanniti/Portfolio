//REACT
import React, { useState } from 'react'
//MATERIAL UI
import { Box, DialogContent, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
//CSS
import styles from '../Css/portfolioMobile.module.css'
import mainStyles from '../Css/generalCss.module.css'
//COMPONENTI CUSTOM
import Sito1 from '../../Assets/sito1.png'


function PortfolioMobile() {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <CardContent className={[mainStyles.card, styles.elementToFadeInAndOut]} style={{ marginTop: -10 }}>
                <Dialog maxWidth='xs' className={styles.dialog} open={open} onClose={handleClose}>
                    <DialogTitle style={{ backgroundColor: '#323232', textAlign: 'center', fontWeight: 'bold' }}><span className={mainStyles.robotoFont} style={{ color: '#fa5252', fontSize: 25 }}>Website Project</span></DialogTitle>
                    <DialogContent className={styles.dialog} style={{ backgroundColor: '#323232' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 16 }}>Project: Website</span>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 16 }}>Client: CrowdMoovi</span>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 16 }}>Languages: Java, Javascript</span>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 16 }}>Preview: <a style={{ color: 'white' }} rel="noreferrer" href="https://crowdmoovi.com/" target="_blank">crowdmoovi.com</a></span>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 20, textAlign: 'center' }}>
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 16 }}>CrowdMoovi ed il suo Marketplace NFT permettono agli artisti nel
                                    mondo del cinema come registi, sceneggiatori, attori e molti altri di
                                    finanziare i propri prodotti cinematografici tramite la vendita di
                                    NFTs Cards che offrono vantaggi collegati al prodotto finale. Oltre
                                    a questi vantaggi, ad ogni NFT venduto il team artistico associa una
                                    frazione dei diritti d'autore sull'opera.</span>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 10, textAlign: 'center' }}>
                                <Box
                                    style={{ borderRadius: '2rem' }}
                                    className={styles.immagine}
                                    component="img"
                                    src={Sito1}
                                    sx={{
                                        height: 200,
                                        width: 230,
                                        maxHeight: { xs: 600, md: 600 },
                                        maxWidth: { xs: 1200, md: 1200 },
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </DialogContent>
                </Dialog>
                <Grid container justifyContent='center'>
                    <Grid container justifyContent='flex-start' style={{ marginLeft: 10 }}>
                        <Grid item xs={6} >
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 35 }}>Portfolio </span>
                        </Grid>
                        <Grid item lg={4} xs={4}>
                            <hr />
                        </Grid>
                    </Grid>
                    <Grid contaier>
                        <Grid item lg={6} xs={12} style={{ marginTop: 50 }}>
                            <Card elevation={3} className={styles.portfolioCard}>
                                <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                    <Grid item lg={12} xs={12} style={{ marginTop: 10, textAlign: 'center' }}>
                                        <Box
                                            onClick={handleOpen}
                                            className={styles.immagine}
                                            component="img"
                                            src={Sito1}
                                            sx={{
                                                height: 200,
                                                width: 275,
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

export default PortfolioMobile;