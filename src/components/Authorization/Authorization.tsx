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
import { IState, IUser, Role } from '../../model/data.model';
import { auth } from '../../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, updateNewUser, updateUserGoodleAuthorization } from '../../../store/actions/actionUser';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import { addUser } from '../../../store/actions/actionData';
import { DialogRole } from '../DialogRole/DialogRole';
import { useHistory } from 'react-router-dom';

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
    width: '30%',
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

export function Authorization({ handleClickOpenDialog }: { handleClickOpenDialog: () => void }): JSX.Element {
  const classes = useStyles();
  const userData = useSelector((state: IState) => state.user);
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const [formState, setFormState] = useState<IUser>(userData.data);
  const [error, setError] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
  const [isRegistration, setIsregistration] = useState<boolean>(false);
  const [stateAlert, setstateAlert] = useState<{ open: boolean; message: string }>({ open: false, message: '' });
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const awaitingPromiseRef = React.useRef<{
    resolve: () => void;
    reject: () => void;
  }>();
  const handleClickOpen = () => {
    setOpen(true);
    return new Promise((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = (value: Role) => {
    setOpen(false);
    setFormState((prevState) => ({ ...prevState, role: value }));
    awaitingPromiseRef.current.resolve();
  };

  const isValidation = (name: string, value: string) => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    (name === 'password' && value.length > 6) || (name === 'email' && reg.test(value))
      ? setError((prevState) => ({ ...prevState, [name]: false }))
      : setError((prevState) => ({ ...prevState, [name]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    if (name === 'password' || name === 'email') isValidation(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    isValidation(name, value);
  };
  const handleSabmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!error.email && !error.password && formState.email && formState.password) {
      isRegistration
        ? firebase
            .createUser({ email: formState.email, password: formState.password })
            .then(() => {
              const uid = auth.currentUser.uid;
              dispatch(addAppointment({ firestore }, uid));
              dispatch(addUser({ firestore }, uid, { ...formState, uid: uid, id: uid }));
              history.push('/User/');
              handleClickOpenDialog();
            })
            .catch((error) => {
              const errorMessage = error.message;
              setstateAlert({ open: true, message: errorMessage });
            })
        : firebase
            .login({
              email: formState.email,
              password: formState.password,
            })
            .then(() => handleClickOpenDialog())
            .catch((error) => {
              const errorMessage = error.message;
              setstateAlert({ open: true, message: errorMessage });
            });
      dispatch(updateNewUser(isRegistration));
    }
  };

  const changeSing = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsregistration(!isRegistration);
  };

  const siginGoogle = () => {
    firebase.login({ provider: 'google', type: 'popup' }).then((result) => {
      const user = result.user;
      if (result.additionalUserInfo.isNewUser) {
        handleClickOpen().then(() => {
          const uid = auth.currentUser.uid;
          const data = {
            ...formState,
            name: user.providerData[0].displayName || '',
            email: user.providerData[0].email || '',
            phone: user.providerData[0].phoneNumber || '',
            img: user.providerData[0].photoURL || '',
            uid: uid,
            id: uid,
          };
          dispatch(addUser({ firestore }, uid, data));
          dispatch(updateUserGoodleAuthorization(data));
          dispatch(updateNewUser(true));
          dispatch(addAppointment({ firestore }, uid));
          history.push('/User/');
          handleClickOpenDialog();
        });
      } else {
        handleClickOpenDialog();
      }
    });
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
                  <MenuItem value={'doctor'}>Doctor</MenuItem>
                  <MenuItem value={'patient'}>Patient</MenuItem>
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
                    <IconButton color="secondary" aria-label="add an alarm" onClick={siginGoogle}>
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
      <DialogRole open={open} onClose={handleClose} />
    </>
  );
}
