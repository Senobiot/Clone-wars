import React from 'react';
import { AppBar, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HeaderMenu from './HeaderMenu';
import styles from './Header.module.scss';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuSide from '../MenuSide/MenuSide'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#3f51b5',
    boxShadow: 'inset 0 0 10px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: '0 auto',
    width: '40vw',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function Header({ term, data, update }: any) {
  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter((user) => {
      return user.name.toLowerCase().includes(value);
    });

    update({
      data: filter,
      active: 0,
      term: value,
    });
  };
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolBar }}>
<<<<<<< HEAD
          <MenuSide />
=======
          <a href="/MainContainer">
            <div className={styles.heartbeatloader}>
              <svg width="100%" height="100%" viewBox="0 0 150 400" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={styles.path}
                  d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
                  fill="transparent"
                  strokeWidth="4"
                  stroke="black"
                />
              </svg>
              <div className={styles.heartbeatloader}></div>
              <div className={styles.outercircle}></div>
            </div>
          </a>
>>>>>>> c54ea23 (feat: add page transitions)
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={dataSearch}
            />
          </div>
          <HeaderMenu></HeaderMenu>
        </Toolbar>
      </AppBar>
    </>
  );
}
