import React from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Test from "../contenitore";

const url = "http://localhost:8080/api/toDoList/getAllToDoList";


function Todo() {
  const [post, setPost] = React.useState(null);


  const handleChange = (e, id) => {
    if (e.target.checked === true) {
      post[id].completata = "S";
    } else {
      post[id].completata = "N";
    }
    setPost(post);
    console.log(post)
  };
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
      console.log(response.data)
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
              <TableCell>TO-DO</TableCell>
              <TableCell align="left">Descrizione</TableCell>
              <TableCell align="left">Completato</TableCell>
            </TableRow>
          </TableHead>
          {post != null || undefined ? (
            <TableBody>
              {post.map((row, id) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nomeToDo}
                  </TableCell>
                  <TableCell align="left">{row.descrizioneToDo}</TableCell>
                  <TableCell align="left">
                    <Checkbox
                      checked={post[id].completata === "N" ? false : true}
                      onChange={(e) => handleChange(e, row.id - 1)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </div>
  );
}

export default Todo;
