import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, Snackbar } from '@mui/material';

import { Navigate, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://carbonaltdel.tech/">
        CarbonAltDel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginPage() {

  const navigate = useNavigate();

  const [err,setErr] = useState(false);

  const {login} = useContext(AuthContext);


  const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email  = event.target[0].value;
    const password = event.target[2].value;

    try{
      const res = await signInWithEmailAndPassword(auth, email, password
      );
      console.log(res);
      navigate('/account')

    } catch(err){
      setErr(true);
    }

  };

   useEffect(()=>{
        // check if url params has redirect=true
       if(window.location.href==='http://localhost:3000/login?redirect=true'){
           setState({open: true, vertical: 'top', horizontal: 'center'})
       } else {
              setState({open: false, vertical: 'top', horizontal: 'center'})
       }
    },[])

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setState({  vertical: 'top',
      horizontal: 'center', open: false });
    };


  return (
    <div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            You have successfully registered! Please login to continue.
        </Alert>
      </Snackbar>
      <div style={{}}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            paddingTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#84a98c" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="false"
              autoFocus
            /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="false"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#52796F" }}
            >
              Sign In
            </Button>
            {err && <Typography variant="body2" color="error" align="center" sx={{ mt: 3, mb: 2 }}>
              Invalid Credentials
            </Typography>}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: "#84a98c" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" sx={{ color: "#84a98c" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </div>
    </div>
  );
}
