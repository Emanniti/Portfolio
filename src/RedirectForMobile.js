import React from "react";
import { Grid } from "@mui/material";
import Home from "./Componenti/Home";
 import HomeMobile from '../src/ComponentiMobile/HomeMobile';

function RedirectForMobile() {
    return (
        <div>
            <Grid item xs={12} sx={{ display: { xs: 'none', md: 'initial' } }}>
                <Home />
            </Grid>
            <Grid item xs={12} md={1} lg={1} display={{ xs: 'initial', md: 'none' }}>
                <HomeMobile />
            </Grid>
        </div>
    );
}

export default RedirectForMobile;