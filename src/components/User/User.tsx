import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import style from './User.module.scss';
import { TextFieldEditor } from './TextFieldEditor';
import { PhotoCamera } from '@material-ui/icons';
import { uploudImage } from '../../services/updateFirebase';
import { IData, IUser } from '../../model/data.model';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, updateUserField } from '../../../store/actions/actionUser';
import { SchedulerVisit } from '../SchedulerVisit/SchedulerVisit';
import { useFirestore } from 'react-redux-firebase';
import { Spinner } from '../Spinner/Spinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
    input: {
      display: 'none',
    },
  }),
);

export function User(): JSX.Element {
  const classes = useStyles();
  const userData = useSelector((state) => state.user);
  const dataState: IData = useSelector((state) => state.data);
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const [formStateUser, setFormStateUser] = useState<IUser>(userData.data);
  const [file, setFile] = useState<FileList>();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => setFormStateUser(userData.data), [userData]);
  useEffect(() => {
    if (file) {
      uploudImage(file).then(async (url) => {
        await setFormStateUser((prevState) => ({ ...prevState, img: url }));
        dispatch(updateUserField({ firestore }, formStateUser.uid, 'img', url));
      });
    }
  }, [file]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormStateUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveUser = () => {
    if (isEdit) {
      dispatch(updateUser({ firestore }, formStateUser.uid, formStateUser));
    }
    setIsEdit(!isEdit);
  };
  /*  if (!dataState.users) return <Spinner />; */
  const dataUser = [
    { name: 'name', type: 'text' },
    { name: 'gender', type: 'select', option: ['male', 'female'] },
    { name: 'birthday', type: 'date' },
    { name: 'phone', type: 'tel' },
    { name: 'email', type: 'email' },
  ];
  let dataDoctor; /* = [
    { name: 'name', type: 'text' },
    { name: 'birthday', type: 'date' },
    { name: 'gender', type: 'select', option: ['male', 'female'] },
    { name: 'phone', type: 'tel' },
    { name: 'email', type: 'email' },
    { name: 'medcenter', type: 'select', option: dataState.med_centers.map((item) => item.name) },
    { name: 'speciality', type: 'select', option: dataState.services_category.map((item) => item.medic) },
    { name: 'category', type: 'text' },
    { name: 'graduation', type: 'text' },
    ,
  ]; */
  const data = userData.data.role === 'patient' ? dataUser : dataDoctor;
  return (
    <div className={style.wrapper}>
      {!userData.authorized ? (
        <Grid style={{ height: '100%' }} container justify="center" alignItems="center">
          <Typography variant="h4" gutterBottom>
            You are not an authorized user
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid className={style.item}>
            <Card className={style.card}>
              <CardContent className={style.cardContent}>
                <Grid className={style.avatar} item md={4} sm={4}>
                  <Avatar style={{ height: '100px', width: '100px' }} src={userData.data.img}></Avatar>
                  <input
                    accept="image/"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    onChange={(e: any) => setFile(e.target.files[0])}
                  />
                  <label className={style.upload} htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <PhotoCamera />
                    </IconButton>
                  </label>{' '}
                </Grid>
                <Grid item xs md>
                  {data.map((item: { name: string; type: string; option?: string[] }) => {
                    return (
                      <TextFieldEditor
                        key={item.name}
                        name={item.name}
                        type={item.type}
                        isEdit={isEdit}
                        options={item.option}
                        formStateUser={formStateUser[item.name]}
                        handleChange={handleChange}
                      />
                    );
                  })}
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={saveUser}>
                  {isEdit ? 'Save profile' : 'Edit profile'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={style.item}>
            <Card className={style.cardVisit}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Мои визиты
                </Typography>
                <SchedulerVisit />
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </div>
  );
}
