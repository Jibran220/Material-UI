import React from "react";

 import  "../OPst.css"

 import Draggable from "react-draggable"
import styled from 'styled-components'





import {

  Container,
  CssBaseline,
  AppBar,
  Button,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Card,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { PrimaryMainTheme } from "../Theme";


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircle from "@mui/icons-material/AccountCircle";

const Login = () => {

 
 
  const handleSubmit = (event) => {
     
  };

  return (
    
    <>
          
<Container maxWidth="lg"  > 

      <Grid container spacing={2}>
        <Grid item xs={8} className="hj" style={{ paddingTop: "19%" }}>
          <Typography variant="h2" gutterBottom>
            Welcome the AI Application
          </Typography>
          <Typography variant="p" gutterBottom>
            Here you can get code by generated by AI. It solve all of your
            Problems
          </Typography>
        </Grid>

        <Grid item xs={4} style={{ paddingTop: "8%" }}>
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
 
        <div className="card"> 
         <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
       
          <Typography component="h1" variant="h3">
            Login in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              color ="error"

              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              color ="error"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
       
            <Button
 color="error" variant="contained"
              fullWidth
             
              sx={{ mt: 3, mb: 2 }}
            >
              Login In
            </Button>
            <Grid container>
        
              <Grid item>
                <Link href="#" variant=" " color="error">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </div>
      
      </Container>
 
        
          {/* <Card sx={{ minWidth: 300 }}   >
            <CardContent>
            <div> 
              <Box sx={{ "& > :not(style)": { m: 1 } }} style={{ paddingTop: "19px" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="With sx"
                    variant="standard"
                  />
                </Box>
              </Box>
              <Box sx={{ "& > :not(style)": { m: 1 } }} style={{ paddingTop: "19px" }}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="With sx"
                    variant="standard"
                  />
                </Box>
              </Box>
            </div>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          {/* </Card> */}  
        </Grid>
      </Grid>
</Container>

    </>
  );
};

export default Login;

 