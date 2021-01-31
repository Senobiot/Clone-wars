import React from 'react';
import { AppBar, InputBase, Toolbar } from '@material-ui/core';
import HeaderMenu from './HeaderMenu';
import { SearchBar } from '../Search/SearchBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuSide from '../MenuSide/MenuSide'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#2194E0',
    boxShadow: 'inset 0 0 10px'
  },
  appbar: {
    left: 5
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: '0 auto',
    width: '400px',
    maxWidth: 'calc(100vw - 200px)',
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(6),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0',
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

export function Header({ term, data, update }: any): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar classes={{ root: classes.toolBar }}>
          <MenuSide />
          <div className={classes.search}>
              <SearchBar />
          </div>
          <HeaderMenu></HeaderMenu>
        </Toolbar>
      </AppBar>
    </>
  );
}
