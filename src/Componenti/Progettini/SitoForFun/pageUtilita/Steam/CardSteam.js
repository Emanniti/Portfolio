import { Card, Grid, InputLabel, TextField } from "@mui/material";
import SteamCss from '../../css/steam.module.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: 'black',
    },
    '& label.Mui-focused': {
        color: '#0197cf',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#0197cf',
        },
        '&:hover fieldset': {
            borderColor: '#0197cf',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0197cf',
        },
    },
});

function CardSteam(props) {

    const [listaGiochi, setLisdtaGiochi] = useState(props.giochi);

    function handleStato(params) {
        switch (params) {
            case 0:
                return <span style={{ color: "grey" }}>Offline</span>

            case 1:
                return <span style={{ color: "green" }}>Online</span>

            case 2:
                return <span style={{ color: "red" }}>Occupato</span>

            case 3:
                return <span style={{ color: "yellow" }}>Away</span>

            case 4:
                return "Snooze"

            case 5:
                return "Looking to trade"

            case 6:
                return "Looking to play"

            default:
                return "Private"
        }
    }

    function handleFilter(params) {
        let list = [];
        props.giochi.map(item => item.name.toLowerCase().includes(params.target.value.toLowerCase()) ? list.push(item) : null)
        setLisdtaGiochi(list);
    }

    return (
        <Card className={SteamCss.cardSteam} style={{ marginTop: 50 }} sx={{ maxWidth: 1000 }}>
            <Grid style={{ marginTop: 10, marginLeft: 10 }} container spacing={3}>
                <Grid item>
                    <CardMedia
                        sx={{
                            height: 200,
                            width: 200,
                            maxHeight: { xs: 600, md: 600 },
                            maxWidth: { xs: 900, md: 900 },
                        }}
                        image={props.fotoProfilo}
                        title="green iguana"
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography textAlign={"center"} style={{ color: "white"}} gutterBottom variant="h5" component="div">
                    <span style={{ color: "white", fontWeight:"bold"}}>{props.nome}</span>
                    </Typography>
                    <Grid container>
                        <Grid item style={{ marginTop: 20 }} xs={12}>
                            <Typography style={{ color: "white"}} gutterBottom variant="h6" component="div">
                                Nome: <span style={{ color: "white", fontWeight:"bold"}}>{props.nomeReale}</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{ color: "white"}} gutterBottom variant="h6" component="div">
                                Url: <span style={{ color: "white", fontWeight:"bold"}}><a href={props.url} target="_blank" rel="noreferrer">{props.url}</a></span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{ color: "white"}} gutterBottom variant="h6" component="div">
                                Stato: <span style={{ color: "white", fontWeight:"bold"}}>{handleStato(props.stato)}</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{ color: "white"}} gutterBottom variant="h6" component="div">
                                Ultima volta online: <span style={{ color: "white", fontWeight:"bold"}}>{new Date(props.ultimaVoltaOnline * 1000).toLocaleDateString('it-IT')}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CardContent>
                <Grid style={{ marginLeft: 10 }} container spacing={3}>
                    <Grid item xs={12}>
                        <Typography style={{ color: "white", fontWeight: "bold" }} gutterBottom variant="h6" component="div">
                            Giochi totali: <span style={{ color: "white", fontWeight:"bold"}}>{props.giochiTotali}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "black", fontWeight: "bold" }}>Visualizza Giochi</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container justifyContent={"center"}>
                                    <Grid item>
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            <span style={{ color: "black" }}>Nome Gioco</span>
                                        </InputLabel>
                                        <CssTextField onChange={e => handleFilter(e)}></CssTextField>

                                    </Grid>
                                </Grid>
                                <TableContainer component={Paper} style={{ marginTop: 10 }}>
                                    <Table sx={{ minWidth: 800 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="left"><span style={{ fontWeight: "bold" }}>NOME</span></StyledTableCell>
                                                <StyledTableCell align="left"><span style={{ fontWeight: "bold" }}>ORE(TOT)</span></StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {listaGiochi.sort(function (a, b) { return b.playtime_forever - a.playtime_forever }).map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <Grid container>
                                                            <Grid item>
                                                                <CardMedia
                                                                    sx={{
                                                                        height: 50,
                                                                        width: 50,
                                                                        maxHeight: { xs: 600, md: 600 },
                                                                        maxWidth: { xs: 900, md: 900 },
                                                                    }}
                                                                    image={"http://media.steampowered.com/steamcommunity/public/images/apps/" + row.appid + "/" + row.img_icon_url + ".jpg"}
                                                                    title="green iguana"
                                                                />
                                                            </Grid>
                                                            <Grid item style={{ marginTop: 15, marginLeft: 10 }}>
                                                                <span style={{ fontWeight: "bold" }}>{row.name}</span>
                                                            </Grid>
                                                        </Grid>


                                                    </StyledTableCell>
                                                    <StyledTableCell align="left"><span style={{ fontWeight: "bold" }}>{Math.trunc(row.playtime_forever / 60)}</span> hours</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CardSteam;