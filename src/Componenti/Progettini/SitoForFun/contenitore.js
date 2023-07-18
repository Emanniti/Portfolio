import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import StileHome from  "./css/stileHome.module.css";

function Test() {
  return (
    <div>
        <div>
          <AppBar className={StileHome.navBAR}>
            <Toolbar className={StileHome.toolBar}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button variant="text">
                  <Link to="/sitoForFun" className={StileHome.bottoniNavBar}>
                    Home
                  </Link>
                </Button>

                <Button variant="text">
                  <Link to="/utilita" className={StileHome.bottoniNavBar}>
                    Utilità
                  </Link>
                </Button>

                <Button variant="text">
                  <Link to="/informazioniSito" className={StileHome.bottoniNavBar}>
                    Informazioni
                  </Link>
                </Button>

                <Button variant="text">
                  <Link to="/home" className={StileHome.bottoniNavBar}>
                    HOME INIZIALE
                  </Link>
                </Button>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
    </div>
  );
}

export default Test;
