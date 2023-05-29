//REACT
import React, { useEffect, useState } from 'react'
import { listPortfolio } from './portfolioSection/listPortfolio';
//MATERIAL UI
import { Box, DialogContent, Grid } from '@mui/material'
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
//CSS
import styles from '../Css/portfolio.module.css'
import mainStyles from '../Css/resume.module.css'
import resume from '../Css/resume.module.css'
//IMMAGINI
import { Link } from 'react-router-dom';

function Portfolio() {

    const [open, setOpen] = useState(false);
    const [lista, setLista] = useState([]);

    const handleClose = (progetto) => {
        setOpen(false);
        let list = lista;
        let index;
        index = lista.findIndex(e => e.titolo === progetto)
        list[index].aperto = false
        setLista(list)
    };

    const handleOpen = (progetto) => {
        setOpen(true);
        let list = lista;
        let index;
        index = lista.findIndex(e => e.titolo === progetto)
        list[index].aperto = true
        setLista(list)
    };

    const handleLink = (titolo, prewiew) => {
        switch (titolo) {
            case "Website":
                return <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 10 }}><a style={{ color: 'white' }} rel="noreferrer" href={prewiew} target="_blank">crowdmoovi.com</a></span>
            case "Website Disney clone":
                return <Link to="/disneyPlus"><Button className={styles.iconeAppBar} variant="text">{prewiew}</Button></Link>
            case "Calcio site":
                return <Link to="/football"><Button className={styles.iconeAppBar} variant="text">{prewiew}</Button></Link>
            default:
                break;
        }
    };

    useEffect(() => {
        document.body.classList.add(styles.test);
        console.log(open)
        setLista(listPortfolio)
        return () => {
            document.body.classList.remove(styles.test);
            document.body.classList.remove(resume.lineaPortfolio);
            setLista(listPortfolio)
        }
    }, [open]);

    return (
        <div>
            <CardContent className={[mainStyles.resumeBackground, mainStyles.elementToFadeInAndOut]}>
                <Grid container justifyContent="left" spacing={2}>

                    <Grid item xs={12} >
                        <Grid container justifyContent='flex-start' style={{ marginLeft: 20 }}>
                            <Grid item xs={5} >
                                <span className={styles.robotoFont} style={{ color: 'white', fontSize: 50 }}>Portfolio </span>
                            </Grid>
                            <Grid item xs={4}>
                                <hr className={resume.lineaPortfolio} />
                            </Grid>
                        </Grid>
                    </Grid>
                    {lista.map(item =>
                        <div key={item.titolo}>
                            <Grid item xs={12} style={{ marginTop: 50, marginLeft: 20 }}>
                                <Card elevation={3} className={styles.portfolioCard}>
                                    <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                        <Grid item xs={4} style={{ marginTop: 10 }}>
                                            <Box
                                                onClick={e => handleOpen(item.titolo)}
                                                className={styles.immagine}
                                                component="img"
                                                src={item.immagine}
                                                sx={{
                                                    height: item.altezza,
                                                    width: item.larghezza,
                                                    maxHeight: { xs: 600, md: 600 },
                                                    maxWidth: { xs: 900, md: 900 },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 10 }}>
                                        <span className={styles.robotoFont} style={{ color: '#a6a6a6', fontSize: 25 }}>{item.titolo}</span>
                                    </Grid>
                                    <Grid item xs={12} style={{ marginTop: 10 }}>
                                        <span className={styles.robotoFont} style={{ color: 'white', fontSize: 25 }}>{item.descrizione}</span>
                                    </Grid>
                                </Card>
                            </Grid>

                            <Dialog maxWidth='lg' className={styles.dialog} open={item.aperto} onClose={e => handleClose(item.titolo)}>
                                <DialogTitle style={{ backgroundColor: '#323232', textAlign: 'center', fontWeight: 'bold' }}><span className={mainStyles.robotoFont} style={{ color: '#fa5252', marginLeft: 10, fontSize: 25 }}>{item.titolo}</span></DialogTitle>
                                <DialogContent className={styles.dialog} style={{ backgroundColor: '#323232' }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 30 }}>{item.progetto}</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 200 }}>{item.cliente}</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 30 }}>{item.linguaggi}</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18, paddingLeft: 200 }}>
                                                Prewiew: {handleLink(item.titolo, item.prewiew)}
                                            </span>
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: 20, paddingLeft: 30 }}>
                                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 18 }}>{item.descrizioneInterna}</span>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box
                                                style={{ marginLeft: 10, marginRight: 10, borderRadius: '2rem' }}
                                                className={styles.immagine}
                                                component="img"
                                                src={item.immagineInterna}
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
                        </div>
                    )}
                </Grid>
            </CardContent>
        </div>
    );
}

export default Portfolio;