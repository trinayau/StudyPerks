// MUI Imports
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
import "./style.css";
// React Imports
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// Context Imports
import {db} from "../../firebase";

// Firebase Imports
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">StudyPerks</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUpPage() {
  const navigate = useNavigate();

  const [err,setErr] = useState(false);

  const handleLink = (link) => {
    navigate(link);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const email = event.target[0].value;
    const displayName = event.target[2].value;
    const password = event.target[4].value;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName });
      await setDoc(doc(db, "users", res.user.uid), {
        displayName: displayName,
        email: email,
        uid: res.user.uid,
        points: 0
      });
      navigate("/login?redirect=true")


    } catch(err){
      setErr(true);

    }
  };

  return (
    <div>
      <div
        className="register"
        style={{  height: "100vh" }}
      >
        <Container component="main" maxWidth="xs">
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
            <Avatar sx={{ m: 1, bgcolor: "#FF8A5B" }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
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
                autoComplete="false"
                autoFocus
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="false"
                autoFocus
                sx={{        "& .MuiInputBase-root": {
                  color: 'white'
              },
            // placeholder
            "& .MuiInputBase-input::placeholder": {
              color: "white",
            },
            }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="false"
                sx={{        "& .MuiInputBase-root": {
                  color: 'white'
              }}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#FF8A5B", color: "white" }}
              >
                Sign Up
              </Button>
              {err && <Typography variant="body2" color="error" align="center">
                {"Email already in use"}
              </Typography>}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: "black" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => handleLink("/login")}
                    variant="body2"
                    sx={{ color: "black" }}
                  >
                    {"Have an account already? Sign in"}
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
