import { Grid, SpeedDialIcon } from "@mui/material";
import React, { useState } from "react";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import mainStyles from './Css/generalCss.module.css'
import './Css/homeMobile.module.css'
//SEZIONI
import AboutMeMobile from './SezioniMobile/AboutMeMobile'
import ResumeMobile from "./SezioniMobile/ResumeMobile";
import PortfolioMobile from "./SezioniMobile/PortfolioMobile";
//ICONE
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfiloMobile from "./SezioniMobile/ProfiloMobile";



function HomeMobile() {

    const actions = [
        { icon: <AccountBoxIcon style={{ color: 'white' }} />, name: 'profilo', section: 'profilo'},
        { icon: <HomeIcon style={{ color: 'white' }} />, name: 'home', section: 'home'},
        { icon: <ArticleIcon style={{ color: 'white' }} />, name: 'resume', section: 'resume'},
        { icon: <WorkIcon style={{ color: 'white' }} />, name: 'portfolio', section: 'portfolio'},
    ];

    const [sezione, setsezione] = useState(<AboutMeMobile />);

    function handleClickSection(sezione) {
        switch (sezione) {
            case "profilo":
                setsezione(<ProfiloMobile />)
                break;
            case "home":
                setsezione(<AboutMeMobile />)
                break;
            case "resume":
                setsezione(<ResumeMobile />)
                break;
            case "portfolio":
                setsezione(<PortfolioMobile />)
                break;
            default:
                console.log("Nessuna sezione selezionata!")
                break;
        }
    }

    return (
        <div>
            <Grid container justifyContent='center'>
                <Grid item xs={12} >
                    <Box sx={{ position: 'relative', mt: 1, height: 100 }}>
                        <SpeedDial
                        className={mainStyles.sezioniBar}
                            sx={{ '& .MuiFab-primary': { backgroundColor: '#111111', color: 'white' }, '& .MuiFab-primary:hover':{backgroundColor: '#111111'} }}
                            ariaLabel="SpeedDial playground example"
                            hidden={false}
                            icon={<SpeedDialIcon />}
                            direction={'bottom'}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    className={mainStyles.sezioniBar}
                                    sx={{ width: 50, height: 50 }}
                                    onClick={() => handleClickSection(action.section)}
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </Grid>
                <Grid item sx={12} lg={12}>
                    {sezione}
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeMobile;