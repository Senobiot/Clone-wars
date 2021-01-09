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
    TextField,
    Typography,
} from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from '@material-ui/icons/Lock';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './authorizatio.scss';

/* import { auth, db } from '../../firebase';
var provider = new firebase.auth.GoogleAuthProvider();
 */
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

const Authorization: React.FC = () => {
    const classes = useStyles();
    /*   const changeAuthPage = (namePage: string): void => {
    setStateAuth(namePage);
  }; */
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        role: '',
    });
    const [error, setError] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
    const [isRegistration, setIsregistration] = useState<boolean>(false);
    const [stateAuth, setStateAuth] = useState();

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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        if (name === 'password' || name === 'email') isValidation(name, value);
    };

    const handleBlur = (e: any) => {
        const { name, value } = e.target;
        isValidation(name, value);
    };
    const handleSabmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    /*   const singUpGoogle = () => {}; */
    return (
        <>
            <Grid className="container" container direction="column" justify="center" alignItems="center">
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
                                    IconComponent={() => <RecentActorsIcon />}
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
                            onClick={(e) => handleSabmit(e)}
                        >
                            {!isRegistration ? 'Sign in' : 'Sign up'}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <IconButton color="secondary" aria-label="add an alarm">
                                    <img src={'../../assets/google.png'} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={() => setIsregistration(!isRegistration)}>
                                    {!isRegistration ? "Don't have an account? Sign Up" : 'Sign in'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default Authorization;
