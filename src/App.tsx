import React from 'react';
import { Typography, AppBar, CardActions, CssBaseline, Grid, Toolbar } from '@mui/material';
import { Container, Button, GitHubIcon, Card, CardMedia, CardContent } from './style';
import Avatar from '@mui/material/Avatar';
// const Container1 = styled(Container, {})(({theme})=>({
//     backgroundColor:"red",
//     ".MuiButtonBase-root":{
//         width:500
//     }
//   }));
// const Container1 = styled(Container, {})`background-color:red;`;
// const StyledButton = styled(Button)(({ theme, color }) => ({
//     minWidth: 0,
//     margin: theme.spacing(0.5),
//     backgroundColor: color ? theme.palette[color].light : undefined
//   }));
// const StyledContainer = styled(Container, {})(({theme})=>({
//     backgroundColor:"red",
//     ".MuiButtonBase-root":{
//         width:500
//     }
//   }));
// const StyledContainer = styled(Container, {})(({theme})=>({
//     // backgroundColor:theme.palette.bacground.paper,
//     padding: theme.spacing(8,0,6)
//   }));
const cards = [{ name: "L3 Education Tutor Site", photo: "//image.thum.io/get/http://next-js-l3.vercel.app/", link:"https://next-js-l3.vercel.app/", description:"I have helped a tutoring center to setup a website, so teacher and student can have their classes online, this is my very first Solo in charge of frontend Dev,it was a memorable journey."},
{ name: "Storage Supply Tracker", photo: "//image.thum.io/get/http://farm-ville.vercel.app/", link:"farm-ville.vercel.app/", description:"some brainstorming ideas of supplyment tracker system"},
{ name: "FooberSearch, Find it your way, A platform to search multiple FoodSites for results ", photo: "//image.thum.io/get/http://foober-search-v1.vercel.app/", link:"https://foober-search-v1.vercel.app/" , description:"this idea came from a school teacher, as I was just getting started, I have discovered a larger hole to fill, Should I build a webcrawl api or learn elastic search...(ON HOLD & to be continued)"},
{name:"Making a Unity Game with Friends", photo:"https://th.bing.com/th?id=OSK.9db110b7a80258719fc5f0c017717e0d&w=188&h=132&c=7&o=6&pid=SANGAM", link:"https://github.com/ChickenLamb/", description:"begin my new journey on Game making, then I see a whole new world with my friend, some fundamentals skill are grpc, fishhnet, c# and unity just like my life, click here to checkout my github profile(STILL DEVELOPING...)"}]

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <GitHubIcon />
          <Typography variant="h6">
            Github Simple Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            <Avatar alt="Chicken Lamb" src="./ChickenLamb.svg" sx={{ width: 76, height: 76 }}/>
              <br/>
              ChickenLamb Portfolio's
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to my Portfolio, I love to eat chicken and lamb.
            </Typography>
            <div>
              <Container>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      this is a button
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      this is also a button 
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Container>
        </div>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((data,index) => (<Grid item xs={12} sm={6} md={4}>
              <Card>
                <a href={data.link} target="_blank">
                <CardMedia image={data.photo} title="Image title" />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {data.name}
                  </Typography>
                  <Typography paragraph color="black">
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{border:"1px solid #6D9BE2", backgroundColor:(index < 2 )?"#6FBC8A":"#f6f285", color:(index < 2 )?"white":"primary"}} size="small">q_|0T0|_/d</Button>
                  {/* <Button style={{border:"1px solid #6D9BE2"}} size="small" color="primary">0</Button> */}
                </CardActions>
                </a>
              </Card>
            </Grid>))}

          </Grid>
        </Container>
      </main>
      <footer style={{ padding: "15px 0" }}>
        <Typography variant='h6' align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  )
}
export default App;