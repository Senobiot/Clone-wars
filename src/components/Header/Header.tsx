import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import HeaderMenu from "./OpenMenu";
import useStyles from "./UIStyles";
import "../../global/variables.scss";
import "../../global/reset.scss";
import "./Header.scss";

export default function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <a href = '#'><img src={'../src/assets/logo.png'}/></a>
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
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <HeaderMenu></HeaderMenu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
