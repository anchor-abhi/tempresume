import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router";
import { Dialog, DialogTitle, Stack } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" target="_blank" href="https://masaischool.com/">
        Masai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  localStorage.setItem("loggedinUser", JSON.stringify(null));

  const navigate = useNavigate();
  const [model, setModel] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("https://masairesumebuilder.herokuapp.com/user/login", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        if (res.data.err) {
          alert(res.data.err);
        } else {
          // set(res.data.token);
          console.log(res.data.user[0]._id);
          localStorage.setItem(
            "loggedinUser",
            JSON.stringify(res.data.user[0]._id)
          );
          navigate("/createform");
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleModelOpen = () => {
    setModel(true);
  };
  const handleModelClose = () => {
    setModel(false);
  };

  const forgotPass = (email) => {
    console.log(email);
    if (!email) {
      return alert("Please enter the email");
    }
    // https://masairesumebuilder.herokuapp.com/user/forgot-password
    axios
      .post(`http://localhost:4444/user/forgot-password`, {
        email,
      })
      .then((res) => {
        if (res.data.err) {
          alert(res.data.err);
        } else {
          alert("Email sent successfully, please check your spam as well");
          handleModelClose();
        }
      })
      .catch((e) => {
        console.log(e.message);
        handleModelClose();
      })
        
  };

  return (
    <>
      <Dialog open={model} onClose={handleModelClose}>
        <Box sx={{padding:"30px", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
          <DialogTitle>
            <Typography sx={{textAlign:"left"}} variant="h4">Enter email </Typography>
          </DialogTitle>
          <Stack direction="row" spacing={2}>
          <TextField onInput={(event)=>{
            setEmail(event.target.value);
          }} required sx={{width:"300px"}} label="Email" />
          <Button variant="contained" onClick={()=>{
            forgotPass(email);
          }}>Submit</Button>
          </Stack>
        </Box>
      </Dialog>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" /*onClick={handleModelOpen}*/ variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
