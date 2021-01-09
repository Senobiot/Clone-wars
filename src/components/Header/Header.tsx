import React from 'react';
import { AppBar, InputBase, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HeaderMenu from '../HeaderMenu';
import useStyles from './UIStyles';
import styles from './Header.module.scss';

export function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" >
        <Toolbar classes={{ root: classes.toolBar }}>
          <a href="#">
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
            />
          </div>
          <HeaderMenu></HeaderMenu>
        </Toolbar>
      </AppBar>
    </>
  );
}
