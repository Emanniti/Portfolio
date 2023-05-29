//REACT
import React, { useState } from "react";
//MATERIAL UI
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//CSS
import FootballCss from "../Football/CssFootball/football.module.css"

function FootballHome() {

    const [lista, setLista] = useState([]);

    const handleClick = async () => {
        const url = 'https://odds.p.rapidapi.com/v4/sports/soccer_italy_serie_a/scores?daysFrom=3';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a6a3ee7718msh500a9a7f1f87e46p1d6267jsn12417f49e581',
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setLista(JSON.parse(result));
        } catch (error) {
            console.error(error);
        }
    };

    const handleScoreHome = (row) => {
        debugger;
        let index = row.scores.findIndex(squadra => squadra.name === row.home_team)
        return row.scores[index].score
    };

    const handleScoreAway = (row) => {
        debugger;
        let index = row.scores.findIndex(squadra => squadra.name === row.away_team)
        return row.scores[index].score
    };


    return (
        <div>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Button onClick={() => handleClick()} variant="outlined">CERCA</Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 10 }}>
                {lista.map((row) => (
                    <Grid xs={3} item>
                        <Card className={FootballCss.card} sx={{ maxWidth: 345 }}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                </Grid>
                                <Grid item textAlign={"center"} xs={12}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography style={{ color: "white", fontSize: 20 }} gutterBottom variant="h7" >
                                                    {row.home_team}  {row.completed === true ? handleScoreHome(row) : null}-{row.completed === true ? handleScoreAway(row) : null} {row.away_team}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default FootballHome;