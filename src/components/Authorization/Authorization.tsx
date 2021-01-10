import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from '@material-ui/icons/Lock';
import React from 'react';
import { useState } from 'react';
import style from './authorizatio.module.scss';
import { signIn, signUp } from '../../services/updateFirebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '30%', // Fix IE 11 issue.
    minWidth: '300px',
    margin: 'auto',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    width: '100%',
  },
}));

function Authorization({ handleClickOpenDialog }: { handleClickOpenDialog: () => void }): JSX.Element {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
  const [isRegistration, setIsregistration] = useState<boolean>(false);
  const [stateAlert, setstateAlert] = useState<{ open: boolean; message: string }>({ open: false, message: '' });

  const isValidation = (name: string, value: string) => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    (name === 'password' && value.length > 6) || (name === 'email' && reg.test(value))
      ? setError((prevState) => ({
          ...prevState,
          [name]: false,
        }))
      : setError((prevState) => ({
          ...prevState,
          [name]: true,
        }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'password' || name === 'email') isValidation(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    isValidation(name, value);
  };
  const handleSabmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isRegistration
      ? signUp(formState.email, formState.password, handleClickOpenDialog, setstateAlert)
      : signIn(formState.email, formState.password, handleClickOpenDialog, setstateAlert);
  };

  const changeSing = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsregistration(!isRegistration);
  };

  return (
    <>
      <Grid className={style.container} container direction="column" justify="center" alignItems="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography component="h1" variant="h5">
            {!isRegistration ? 'Sign in' : 'Sign up'}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputProps={{
                startAdornment: <AlternateEmailIcon />,
              }}
              error={error.email}
              helperText={error.email ? 'Incorrect email' : ' '}
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: <LockIcon />,
              }}
              error={error.password}
              helperText={error.password ? 'Incorrect password' : ' '}
              value={formState.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isRegistration ? (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="role"
                  value={formState.role}
                  onChange={handleChange}
                  label="Role"
                  /* IconComponent={() => <RecentActorsIcon />} */
                >
                  <MenuItem value={'Doctor'}>Doctor</MenuItem>
                  <MenuItem value={'Patient'}>Patient</MenuItem>
                </Select>
              </FormControl>
            ) : (
              ''
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSabmit}
            >
              {!isRegistration ? 'Sign in' : 'Sign up'}
            </Button>
            <Grid container direction="column" justify="space-between" alignItems="center">
              <Grid item>
                <Link href="#" variant="body2" onClick={changeSing}>
                  {!isRegistration ? "Don't have an account? Sign Up" : 'Sign in'}
                </Link>
              </Grid>

              {!isRegistration ? (
                <>
                  <Grid item>
                    <div className={style.line}>
                      <span>or</span>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <IconButton color="secondary" aria-label="add an alarm" onClick={handleClickOpenDialog}>
                      <span className={style.logo}></span>
                    </IconButton>
                  </Grid>
                </>
              ) : (
                ''
              )}
            </Grid>
          </form>
        </Grid>
        <Snackbar
          open={stateAlert.open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={() => setstateAlert({ open: !stateAlert.open, message: '' })}
        >
          <Alert severity="error">{stateAlert.message}</Alert>
        </Snackbar>
      </Grid>
    </>
  );
}

export default Authorization;
