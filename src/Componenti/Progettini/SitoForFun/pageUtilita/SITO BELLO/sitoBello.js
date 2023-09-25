import { motion } from "framer-motion"
import React, { useEffect } from "react";
import sitoBelloCss from '../SITO BELLO/sitoBelloCss/sitoBelloMainCss.module.css'
import { AppBar, Grid, Typography } from "@mui/material";

function SitoBello() {


    return (
        <div>
            <motion.div
                animate={{ x: 50 }}
            >
                <Grid container>
                    <Grid item xs={3} >
                        <Typography style={{ fontSize: 70, color: 'white', fontFamily: 'cursive' }}>HELLO!</Typography>
                    </Grid>
                </Grid>
            </motion.div>

        </div>
    );
}

export default SitoBello;