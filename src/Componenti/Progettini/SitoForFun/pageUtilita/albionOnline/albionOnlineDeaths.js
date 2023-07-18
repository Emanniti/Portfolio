import React from 'react'
import axios from "axios";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Test from '../../contenitore';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function AlbionOnlineDeaths() {

    const [items, setItems] = React.useState(null);
    const [value, setValue] = React.useState('');

    function handleFiltra() {
        let url ="https://murderledger.com/api/players/Lafrasta1/info"
          axios.get(url).then((response) => {
              setItems(response.data.events);
          });
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleImagineElmoKiller(item) {
        let itemImmagine = "";
        itemImmagine = item.killer.loadout.head.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineCorazzaKiller(item) {
        let itemImmagine = "";
        itemImmagine = item.killer.loadout.body.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineStivaliKiller(item) {
        let itemImmagine = "";
        itemImmagine = item.killer.loadout.shoe.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineMainHandKiller(item) {
        let itemImmagine = "";
        itemImmagine = item.killer.loadout.main_hand.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineSecondHandKiller(item) {
        let itemImmagine = "";
        itemImmagine = item.killer.loadout.off_hand.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineCapeKiller(item) {
        let itemImmagine = "";
        itemImmagine = item.killer.loadout.cape.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    //MORTO ---------------------------------------------------------------------------------------------------------------

    function handleImagineElmoVictim(item) {
        let itemImmagine = "";
        itemImmagine = item.victim.loadout.head.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineCorazzaVictim(item) {
        let itemImmagine = "";
        itemImmagine = item.victim.loadout.body.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineStivaliVictim(item) {
        let itemImmagine = "";
        itemImmagine = item.victim.loadout.shoe.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineMainHandVictim(item) {
        let itemImmagine = "";
        itemImmagine = item.victim.loadout.main_hand.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineSecondHandVictim(item) {
        let itemImmagine = "";
        if(item.victim.loadout.off_hand.id.toString() === ""){
            itemImmagine = item.victim.loadout.main_hand.id.toString()
        } else {
            itemImmagine = item.victim.loadout.off_hand.id.toString()
        }
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

    function handleImagineCapeVictim(item) {
        let itemImmagine = "";
        itemImmagine = item.victim.loadout.cape.id.toString()
        let urlImmagine = "https://render.albiononline.com/v1/item/"+ itemImmagine +".png"
        return urlImmagine
    }

  return (
    <div style={{ marginTop: "100px" }}>
        <Test></Test>
         <InputLabel style={{fontWeight:'bold', fontSize: 15}} variant="standard" htmlFor="uncontrolled-native">
           INSERISCI IL NOME DEL GIOCATORE
        </InputLabel>
        <TextField onChange={handleChange} id="outlined-basic" variant="outlined" style={{backgroundColor: "white"}}/>
        <Button variant="contained" onClick={handleFiltra} style={{marginLeft: "50px"}}>Filtra</Button>
        <Divider textAlign="center" style={{marginTop:"20px",fontWeight:'bold', fontSize: 30}}>RISULTATI</Divider>
        
        <Box sx={{ width: '100%' }} style={{marginLeft:"220px", width:"1450px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }} >
        {items !== null ? items.map((row) =>(
        <Grid xs={12} sm={3} style={{marginTop: "50px"}}>
             <Item style={{backgroundColor: "black", borderRadius:"0.5rem"}}>
         <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "white"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Killer: <span style={row.killer.name === value ? {color:"green", fontWeight:"bold"} : {color:"red", fontWeight:"bold"}}>{row.killer.name} </span>
        <div>
        Item Power: <span style={{fontWeight:"bold"}}>{row.killer.item_power}</span>
        </div>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white", marginLeft:135, marginTop:10}}>
        <img src={handleImagineElmoKiller(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Stack direction="row" spacing={3}>
        <Card sx={{maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white", marginLeft:45}}>
        <img src={handleImagineMainHandKiller(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white"}}>
        <img src={handleImagineCorazzaKiller(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white"}}>
        <img src={handleImagineSecondHandKiller(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        </Stack>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white", marginLeft:135}}>
        <img src={handleImagineStivaliKiller(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white"}}>
        <img src={handleImagineCapeKiller(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>

        <Divider textAlign="center" style={{marginTop:"10px", marginBottom:"10px"}}></Divider>  
        Vittima: <span style={row.victim.name === value ? {color:"green", fontWeight:"bold"} : {color:"red", fontWeight:"bold"}}>{row.victim.name} </span>
        <div>
        Item Power: <span style={{fontWeight:"bold"}}>{row.victim.item_power}</span>
        </div>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white", marginLeft:135, marginTop:10}}>
        <img src={handleImagineElmoVictim(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Stack direction="row" spacing={3}>
        <Card sx={{maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white", marginLeft:45}}>
        <img src={handleImagineMainHandVictim(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white"}}>
        <img src={handleImagineCorazzaVictim(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white"}}>
        <img src={handleImagineSecondHandVictim(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        </Stack>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white", marginLeft:135}}>
        <img src={handleImagineStivaliVictim(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        <Card sx={{ maxWidth: 65, maxHeight: 65 }} style={{backgroundColor: "white"}}>
        <img src={handleImagineCapeVictim(row)} style={{height:70, width:70}} alt="Logo" />
        </Card>
        </Typography>
        <li>
        Assist(Players): <span style={{fontWeight:"bold"}}>{row.participant_count}</span>
        </li>
        <li>
        Fama totale uccisione: <span style={{fontWeight:"bold"}}>{row.total_kill_fame}</span>
        </li>
      </CardContent>
    </Card>
    </Item>
        </Grid>
        )) : null}
        </Grid>
    </Box>
    </div>
  )
}

export default AlbionOnlineDeaths