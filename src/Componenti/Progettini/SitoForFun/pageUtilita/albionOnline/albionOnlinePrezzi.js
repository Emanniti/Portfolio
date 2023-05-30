import React from 'react'
import axios from "axios";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import Test from '../../contenitore';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function AlbionOnlinePrezzi() {

  const [items, setItems] = React.useState(null);
  const [sottocategoriaHandle, setSottocategoriaHandle] = React.useState([]);
  const [filtroItem, setFiltroItem] = React.useState("");
  const [filtroCategoria, setFiltroCategoria] = React.useState("");
  const [filtroTier, setFiltroTier] = React.useState("1");
  const [filtroRarita, setFiltroRarita] = React.useState("");

  const categorie = [
    'Accessori',
    "Risorse",
  ];

  const categorieItems = [
    'BAG',
    'CAPE',
  ];

  const categorieArmature = [
    'FIBER',
    'CLOTH',
    'HIDE',
    'LEATHER',
    'METALBAR',
    'ORE',
    'PLANKS',
    'ROCK',
    'STONEBLOCK',
    'WOOD',

  ];

  const tierItems = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ];

  const raritaItems = [
    '0',
    '1',
    '2',
    '3',
  ];

  const handleChange = (event, categoria) => {
    if (categoria === "categoria") {
      setSottocategoriaHandle([])
      setFiltroCategoria(event.target.value);
      if (event.target.value === "Accessori") {
        setSottocategoriaHandle(categorieItems)
      } else if (event.target.value === "Risorse") {
        setSottocategoriaHandle(categorieArmature)
      }
    } else if (categoria === "item") {
      setFiltroItem(event.target.value);
    } else if (categoria === "tier") {
      setFiltroTier(event.target.value);
    } else {
      setFiltroRarita(event.target.value)
    }
  };

  function handleFiltra() {
    let rarita = "";
    let test = "";
    let url = "https://www.albion-online-data.com/api/v1/stats/prices/"
    if (filtroCategoria !== "Accessori" && filtroRarita === "") {
      rarita = "T" + filtroTier + "_" + filtroItem
      url = url + rarita
    } else if (filtroCategoria !== "Accessori" && filtroRarita !== "") {
      if (filtroRarita === "0") {
        rarita = "T" + filtroTier + "_" + filtroItem
      } else {
        rarita = "T" + filtroTier + "_" + filtroItem + "_LEVEL" + filtroRarita + "@" + filtroRarita
      }
      url = url + rarita
    } else {
      rarita = filtroRarita === "" ? "" : "@" + filtroRarita
      test = "T" + filtroTier + "_" + filtroItem + rarita
      url = url + test
    }
    axios.get(url).then((response) => {
      setItems(response.data);
    });
  }



  return (
    <div style={{ marginTop: "100px" }}>
      <Test></Test>
      <Box sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={6} style={{ marginLeft: "60px", marginTop: "10px" }}>
          <InputLabel style={{ fontWeight: 'bold', fontSize: 20 }} variant="standard" htmlFor="uncontrolled-native">
            Categoria
          </InputLabel>
          <InputLabel style={{ marginLeft: "220px", fontWeight: 'bold', fontSize: 20 }} variant="standard" htmlFor="uncontrolled-native">
            Item
          </InputLabel>
          <InputLabel style={{ marginLeft: "250px", fontWeight: 'bold', fontSize: 20 }} variant="standard" htmlFor="uncontrolled-native">
            Tier
          </InputLabel>
          <InputLabel style={{ marginLeft: "80px", fontWeight: 'bold', fontSize: 20 }} variant="standard" htmlFor="uncontrolled-native">
            Rarita'
          </InputLabel>
        </Stack>
        <Stack direction="row" spacing={6} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <Select
            id="demo-simple-select"
            value={filtroCategoria}
            onChange={e => handleChange(e, 'categoria')}
            sx={{ minWidth: 300 }}
            style={{ marginLeft: "10px", backgroundColor: "white" }}
          >

            {categorie.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}

          </Select>
          <Select
            id="demo-simple-select 2"
            value={filtroItem}
            onChange={e => handleChange(e, 'item')}
            sx={{ minWidth: 300 }}
            style={{ marginLeft: "10px", backgroundColor: "white" }}
          >
            {sottocategoriaHandle.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            id="demo-simple-select 2"
            value={filtroTier}
            onChange={e => handleChange(e, 'tier')}
            sx={{ minWidth: 100 }}
            style={{ marginLeft: "10px", backgroundColor: "white" }}
          >
            {tierItems.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            id="demo-simple-select 2"
            value={filtroRarita}
            onChange={e => handleChange(e, 'rarita')}
            sx={{ minWidth: 100 }}
            style={{ marginLeft: "10px", backgroundColor: "white" }}
          >
            {raritaItems.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" onClick={handleFiltra}>Filtra</Button>
        </Stack>
      </Box>

      <Divider textAlign="center" style={{ marginTop: "20px" }}>RISULTATI</Divider>



      <Box sx={{ width: '99%' }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          {items !== null ? items.map((row) => (
            <Grid xs={2}>
              <Item style={{ backgroundColor: "black" }}>
                <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "brown" }}>
                  <CardMedia
                    style={{ marginTop: "10px" }}
                    component="img"
                    height="240"
                    image={"https://render.albiononline.com/v1/item/" + row.item_id + ".png"}
                    alt={row.item_id}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Prezzo {row.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span style={{ fontSize: "30px", backgroundColor: row.city === "Bridgewatch" ? "sandybrown" : row.city === "Caerleon" ? "red" : row.city === "Martlock" ? "blue" : row.city === "Thetford" ? "purple" : row.city === "Fort Sterling" ? "grey" : null }}>{row.sell_price_min === 0 ? "Item non disponibile" : row.sell_price_min}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Silver
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>)) : null}
        </Grid>
      </Box>



    </div>
  )
}

export default AlbionOnlinePrezzi