import React, { useEffect, useState } from 'react';
import { MenuItem, Menu, Button, Avatar } from '@material-ui/core';
import { DialogAutorization } from './DialogAuthorization';
import { signOut } from '../services/updateFirebase';
import { useLocation, useHistory } from 'react-router-dom';

export default function HeaderMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const location = useLocation();
  const history = useHistory();
  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
    if (location.state && location.state.authorized) setIsLoggin(true);
  }, [location]);

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

  const handleClickUserPage = () => {
    history.push({ pathname: '/User', state: { user: location.state.user } });
  };
  const logOut = () => {
    signOut();
    location.state.authorized = false;
    location.state.user = null;
    setAnchorEl(null);
    setIsLoggin(false);
    history.push('/');
  };
  return (
    <div style={{ display: 'flex' }}>
      {isLoggin ? (
        <>
          <Button onClick={handleClickUserPage}>
            <Avatar src={location.state.user.img} />
          </Button>
        </>
      ) : (
        ''
      )}
      <Button onClick={handleClick}>Menu</Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
        {isLoggin ? (
          <MenuItem onClick={logOut}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={handleClickOpenDialog}>Authorization</MenuItem>
        )}
      </Menu>
      <DialogAutorization openDialog={openDialog} handleClickOpenDialog={handleClickOpenDialog} />
    </div>
  );
}
