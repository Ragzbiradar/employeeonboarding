import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
//import GoogleIcon from '../icons/Google';
import { GoogleLogin } from 'react-google-login';
import axios from'axios';
import '../styles/Login.css'


const Login = () => {

    const responseSuccessGoogle = (response) => {
        console.log(response)
        axios({
            method: "POST",
            url: "http://localhost:7901/googlelogin",
            data:{googleId: response.profileObj.googleId}
        }).then(response => {
            console.log("google Login success",response)
            localStorage.setItem('tokenId', response.tokenID);
        })
    }

    const responseErrorGoogle = (response) => {
        
    }

  return (
    <>
        <Container className="loginContainer" maxWidth="sm">
              <form>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in using Google
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                    <Button fullWidth>
                        <GoogleLogin
                                clientId="20580104459-7i89gv3opg9fpjpe9n7vmfe5lfqpk856.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseErrorGoogle}
                                cookiePolicy={'single_host_origin'}
                                fullWidth
                            />
                    </Button>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
              </form>
        </Container>
    </>
  );
};

export default Login;
