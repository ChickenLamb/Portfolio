import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

const StyledContainer = styled(Container, {})(({ theme }) => ({
    // backgroundColor:theme.palette.bacground.paper,
    padding: theme.spacing(8, 0, 6)
}));
const StyledButton = styled(Button, {})(({ theme }) => ({
    // backgroundColor:theme.palette.bacground.paper,
    marginTop: "40px"
}));
const StyledGitHubIcon = styled(GitHubIcon, {})(({ theme }) => ({
    // backgroundColor:theme.palette.bacground.paper,
    marginRight: "20px"
}));
const StyledCard = styled(Card, {})(({ theme }) => ({
    // backgroundColor:theme.palette.bacground.paper,
    Height: "100%",
    display: "flex",
    flexDirection: "column"
}));
const StyledCardMedia = styled(CardMedia, {})(({ theme }) => ({
    // backgroundColor:theme.palette.bacground.paper,
    paddingTop: "56.25%",
    // border:"1px solid black"
}));
const StyledCardContent = styled(CardContent, {})(({ theme }) => ({
    // backgroundColor:theme.palette.bacground.paper,
    flexGrow: 1
}));
export {
    StyledContainer as Container,
    StyledButton as Button,
    StyledGitHubIcon as GitHubIcon,
    StyledCard as Card,
    StyledCardMedia as CardMedia,
    StyledCardContent as CardContent
}