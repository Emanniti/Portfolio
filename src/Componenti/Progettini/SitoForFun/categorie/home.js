import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

import HomeCss from '../css/homeCss.module.css'
import Test from '../contenitore';

function Layout () {
  return (
   <div style={{marginTop:"100px"}}>
    <Test></Test>
    <Divider textAlign="left" style={{marginBottom:"10px"}}>GIOCHI GIOCATI</Divider>
    <Stack direction="row" spacing={2} style={{marginLeft:"10px"}}>
      <Card sx={{ maxWidth: 260 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://static.iphoneitalia.com/wp-content/uploads/2021/06/albion_hwKKHsd-770x488.jpg"
        alt="green iguana"
      />
      <CardContent className={HomeCss.contenitoreCarta}>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Albion Online
        </Typography>
        <Typography variant="body2" color="white">
        Albion Online è un MMORPG sandbox fantasy con un'economia gestita dai giocatori, un sistema di combattimento privo di classi e intense battaglie PvP
        </Typography>
      </CardContent>
      <CardActions className={HomeCss.contenitoreCarta}>
      <Fab size="small" color="primary" aria-label="add">
        <HelpIcon />
      </Fab>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 260 }} className={HomeCss.contenitoreCarta}>
      <CardMedia
        component="img"
        height="220"
        image="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
        alt="green iguana"
      />
      <CardContent className={HomeCss.contenitoreCarta}>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Valorant
        </Typography>
        <Typography variant="body2" color="white">
        VALORANT è uno sparatutto tattico 5 vs 5 basato sui personaggi e ambientato su un palcoscenico globale.
        </Typography>
      </CardContent>
      <CardActions className={HomeCss.contenitoreCarta}>
      <Fab size="small" color="primary" aria-label="add">
        <HelpIcon />
      </Fab>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 260 }} cclassName={HomeCss.contenitoreCarta}>
      <CardMedia
        component="img"
        height="240"
        image="https://www.logolynx.com/images/logolynx/00/00ffc7e57ffb143ce0dd3343aa5a59a7.png"
        alt="green iguana"
      />
      <CardContent className={HomeCss.contenitoreCarta}>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Rust
        </Typography>
        <Typography variant="body2" color="white">
        Rust è un gioco multiplayer survival sviluppato da Facepunch Studios 
        </Typography>
      </CardContent>
      <CardActions className={HomeCss.contenitoreCarta}>
      <Fab size="small" color="primary" aria-label="add">
        <HelpIcon />
      </Fab>
      </CardActions>
    </Card>
    <Divider orientation="vertical" flexItem>
        INFO
      </Divider>
    <Card sx={{ minWidth: 500 }} style={{backgroundColor:"purple"}}>
      <CardContent style={{backgroundColor:"purple"}}>
      <Divider textAlign="left" style={{marginTop:"20px"}}>ORE GIOCATE</Divider>
      <List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://www.html.it/app/uploads/2019/07/albion-logo.jpg" />
        </ListItemAvatar>
          <ListItemText
          primary="Ore giocate: 500" style={{marginTop:"25px", marginLeft:"10px", color:"white"}} className={HomeCss.test}/>
        </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://images.cults3d.com/nRRVl-JOJ7u8ycS4NK7UtbNQPgQ=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/15024335/illustration-file/a86d53e4-2bd9-4a8f-9550-986686c3131a/gi0mAjIh_400x400.png" />
        </ListItemAvatar>
          <ListItemText
          primary="Ore giocate: 500" style={{marginTop:"25px", marginLeft:"10px", color:"white"}} className={HomeCss.test}/>
        </ListItem>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/4f/7e/4a/4f7e4a41-c834-5658-fd1d-6b436d88616a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp" />
        </ListItemAvatar>
          <ListItemText
          primary="Ore giocate: 500" style={{marginTop:"25px", marginLeft:"10px", color:"white"}} className={HomeCss.test}/>
        </ListItem>
        </List>
      </CardContent>
    </Card>
    </Stack>
    <Divider textAlign="left" style={{marginTop:"20px"}}>ALTRO</Divider>


    
   </div>
  )
};

export default Layout;