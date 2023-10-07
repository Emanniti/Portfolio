import { AddBox } from "@mui/icons-material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AllGiocatoriList from "./FantacalcioComponents/AllGiocatoriList";
import React from "react";
import ModalAdmin from "./FantacalcioComponents/ModalAdmin";

function FantacalcioHome() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ backgroundColor: '#232D3F' }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                        <Button color="inherit">Logout</Button>
                        <Button onClick={handleOpen}>Admin</Button>
                    </Toolbar>
                </AppBar>
                <ModalAdmin open={open} handleClose={handleClose} />
            </Box>
            <AllGiocatoriList />
        </>);
}

export default FantacalcioHome;