import React, { useEffect, useState } from 'react';
import { MenuItem, Menu, Button, Avatar, Tooltip, IconButton } from '@material-ui/core';
import { DialogAutorization } from '../DialogAuthorization';
import styles from './Header.module.scss';
import { signOut } from '../../services/updateFirebase';
import { useLocation, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser, updateUserAuthorization } from '../../../store/actions/actionUser';

export default function HeaderMenu(): JSX.Element {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const userData = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleClickUserPage = () => {
    history.push('/User/');
  };

  const logOut = () => {
    signOut();
    dispatch(deleteUser());
    history.push('/');
  };

  return (
    <div className={styles.login}>
      {userData.authorized ? (
        <>
          <Button onClick={handleClickUserPage}>
            <Avatar src={userData.data.img} />
          </Button>
        </>
      ) : (
        ''
      )}

      {userData.authorized ? (
        <Tooltip title="Log out" arrow>
          <IconButton onClick={logOut}>
            <ExitToAppIcon style={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Button style={{ color: 'white' }} onClick={handleClickOpenDialog}>
          Войти
        </Button>
      )}

      <DialogAutorization openDialog={openDialog} handleClickOpenDialog={handleClickOpenDialog} />
    </div>
  );
}
