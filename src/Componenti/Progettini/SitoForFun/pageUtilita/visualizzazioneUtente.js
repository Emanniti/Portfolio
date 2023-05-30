import React from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Test from "../contenitore";

const url = "http://localhost:8080/api/Utenti/getAllUtenti";

function VisualizzazioneUtente() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <Test></Test>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "1000px", marginLeft: "210px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell>Nome utente</TableCell>
              <TableCell align="left">Cognome utente</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          {post != null || undefined ? (
            <TableBody>
              {post.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="left">{row.cognome}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </div>
  );
}

export default VisualizzazioneUtente;
