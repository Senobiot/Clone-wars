import React from 'react';
import { MenuItem, Menu, Button } from '@material-ui/core';
import { DialogAutorization } from '../DialogAuthorization/DialogAutorization';
import styles from './Header.module.scss';

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpenDialog = () => {
    setOpenDialog(!openDialog);
    setAnchorEl(null);
  };
  return (
    <div className={styles.profile}>
      <Button onClick={handleClick}></Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClickOpenDialog}>Авторизация</MenuItem>
        <MenuItem onClick={handleClose}>Войти</MenuItem>
      </Menu>
      <DialogAutorization openDialog={openDialog} handleClickOpenDialog={handleClickOpenDialog} />
    </div>
  );
}
