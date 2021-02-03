import React from 'react';
import { Button, Avatar, Tooltip, IconButton } from '@material-ui/core';
import { DialogAutorization } from '../DialogAuthorization';
import styles from './Header.module.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../store/actions/actionUser';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router';

export default function HeaderMenu(): JSX.Element {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const userData = useSelector((state) => state.user);
  const history = useHistory();
  const firestore = useFirestore();
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const handleClickOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleClickUserPage = () => {
    history.push('/User/');
  };

  const logOut = () => {
    dispatch(logoutUser({ firebase }));
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
        <Button className={styles.enter} onClick={handleClickOpenDialog}></Button>
      )}

      <DialogAutorization openDialog={openDialog} handleClickOpenDialog={handleClickOpenDialog} />
    </div>
  );
}
