import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DialogAutorization } from '../DialogAuthorization/DialogAutorization';

const HeaderMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

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
            <Button className="button" onClick={handleClick}>
                Menu
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClickOpenDialog}>Authorization</MenuItem>
                <MenuItem onClick={handleClose}>Registration</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <DialogAutorization openDialog={openDialog} handleClickOpenDialog={handleClickOpenDialog} />
        </div>
    );
};

export default HeaderMenu;
