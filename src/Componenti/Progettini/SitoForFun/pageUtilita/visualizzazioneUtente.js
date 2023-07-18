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

const url = "http://localhost:2020/getUtenti";

function VisualizzazioneUtente() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
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
              {post.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.split('-')[0]}
                  </TableCell>
                  <TableCell align="left">{row.split('-')[1]}</TableCell>
                  <TableCell align="left">{row.split('-')[2]}</TableCell>
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
