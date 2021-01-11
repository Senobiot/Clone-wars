import React from 'react';
import { MenuItem, Menu, Button } from '@material-ui/core';
import { DialogAutorization } from './DialogAuthorization/DialogAutorization';

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
    <div>
      <Button onClick={handleClick}>Menu</Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClickOpenDialog}>Authorization</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <DialogAutorization openDialog={openDialog} handleClickOpenDialog={handleClickOpenDialog} />
    </div>
  );
}
