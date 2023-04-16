import React from 'react'
import { Grid } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import styles from '../Css/resume.module.css'
import resume from '../Css/resume.module.css'

function Contacts() {

    return (
        <div>
            <CardContent className={[styles.resumeBackground, styles.elementToFadeInAndOut]}>
                <Grid container>
                        <Grid item lg={4} xs={2} >
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 60 }}>Contacts </span>
                        </Grid>
                        <Grid item lg={4} xs={4}>
                            <hr className={resume.lineaPortfolio}/>
                        </Grid>
                    </Grid>
            </CardContent>
        </div>
    );
}

export default Contacts;