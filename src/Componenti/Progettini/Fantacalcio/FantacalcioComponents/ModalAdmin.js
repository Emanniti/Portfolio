import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function ModalAdmin(props) {


    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Modale Admin
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="Nome Giocatore" variant="outlined" />
                        </Grid >
                        <Grid item xs={4}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-simple-select-label">Nazionalita' Giocatore</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="Squadra Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="number" id="outlined-basic" label="Eta' Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="number" id="outlined-basic" label="Altezza Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-simple-select-label">Posizione</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Seconda Posizione Giocatore</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-simple-select-label">Rarita'</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField type="number" id="outlined-basic" label="Velocita' Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField type="number" id="outlined-basic" label="Tiro Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField type="number" id="outlined-basic" label="Passaggio Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField type="number" id="outlined-basic" label="Dribling Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField type="number" id="outlined-basic" label="Difesa Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField type="number" id="outlined-basic" label="Fisico Giocatore" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Salva</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </>
    );
}

export default ModalAdmin;