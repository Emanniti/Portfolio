import { Alert, Button, Card, Grid, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MainStyle from './Css/mainCss.module.css'

function HomeFantacalcio() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('NOT LOGGED');

    // useEffect(() => {
    //     let url = "http://localhost:2020/api/"
    //     axios.get(url).then((response) => {
    //         console.log(response.data);
    //     });
    // }, []);


    const handleLogin = async () => {
        const url = "http://localhost:2020/api/login";
        await axios.get(url, {
            params: {
                username: username,
                password: password
            }
        }).then((response) => {
            setLoginStatus(response.data.statusLogin);
        });
    };

    const handleLoginStatuts = () => {
        switch (loginStatus) {
            case 'NOT LOGGED':
                return null
            case 'EFFETTUATO':
                return <Snackbar
                    open={true}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={3000}
                    message="Note archived"
                >
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Login effettuato!
                    </Alert>
                </Snackbar>
            case 'ERRORE':
                return <Snackbar
                    open={true}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={3000}
                    message="Note archived"
                >
                    <Alert severity="error" sx={{ width: '100%' }}>
                        Username o Password errati...
                    </Alert>
                </Snackbar>
            default:
                break;
        }
    };

    console.log(loginStatus)

    return (
        <>
            <Grid container spacing={2} className={MainStyle.mainDiv}>
                <Grid item xs={1}>
                    <Card variant="outlined">
                        <TextField id="filled-basic" label="Username" variant="filled" onChange={(e) => setUsername(e.target.value)} />
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card variant="outlined">
                        <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => setPassword(e.target.value)} />
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined">
                        <Button variant="contained" onClick={() => handleLogin()}>Login</Button>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    {handleLoginStatuts()}
                </Grid>
            </Grid>
        </>
    );
}

export default HomeFantacalcio;