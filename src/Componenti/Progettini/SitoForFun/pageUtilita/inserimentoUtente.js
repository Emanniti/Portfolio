import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Test from "../contenitore";

const baseURL = "http://localhost:8080/api/Utenti/salvaUtente";

function InserimentoUtente() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = React.useState(null);
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    handleDisable()
  })
  

  const handleChangeNome = (event) => {
    setNome(event.target.value);
    handleDisable()
  };

  const handleChangeCognome = (event) => {
    setCognome(event.target.value);
    handleDisable()
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    handleDisable()
  };

  const handleDisable = () => {
    if(nome !== "" && cognome !== "" && email !== "" && nome !== undefined && cognome !== undefined && email !== undefined){
        setDisabled(false)
    } else {
        setDisabled(true)
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

    function createPost() {
        axios.post(baseURL, {
          nome: nome,
          cognome: cognome,
          email: email
        })
        .then((response) => {
          setPost(response.data);
          console.log(post)
          setOpen(true)
        })
        .catch(function (error) {
            console.log(error);
          });
    }

    

  const saveUtente = () => {
    createPost()
    setCognome("")
    setNome("")
    setEmail("")
  }
  return (
    <div>
      <Test></Test>
      <Grid
        container
        spacing={2}
        style={{ marginLeft: "100px", marginTop: "100px" }}
      >
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Inserisci Nome"
            variant="filled"
            style={{ backgroundColor: "white" }}
            value={nome}
            onChange={handleChangeNome}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Inserisci Cognome"
            variant="filled"
            style={{ backgroundColor: "white" }}
            value={cognome}
            onChange={handleChangeCognome}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Inserisci Email"
            variant="filled"
            style={{ backgroundColor: "white", width: "340px" }}
            value={email}
            onChange={handleChangeEmail}
          />
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="add" onClick={saveUtente} disabled={disabled}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled">
          Untente inserito!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default InserimentoUtente;
