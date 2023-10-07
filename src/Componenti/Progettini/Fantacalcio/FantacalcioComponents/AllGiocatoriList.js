import { Card, CardActionArea, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ImageOfPele from '../Fantacalcio Assets/237067.png'

function AllGiocatoriList() {

    function createData(
        name,
        overall,
    ) {
        return { name, overall };
    }

    const rows = [
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
        createData('Pele', 95),
    ];

    return (
        <>
            <Grid container mt={15} pl={10}>
                <Grid item>
                    <Card style={{ backgroundColor: '#005B41' }} sx={{ maxWidth: 500 }}>
                        <CardContent >
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 340 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Rating</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Grid container>
                                                        <Grid item>
                                                            <img
                                                                src={ImageOfPele}
                                                                loading="lazy"
                                                                width={50}
                                                            />
                                                        </Grid>
                                                        <Grid item pt={2} pl={1}>
                                                            {row.name}
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="right">{row.overall}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>);
}

export default AllGiocatoriList;