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
import { setDocument, updateObjectField, uploudImage } from '../../services/updateFirebase';
import { useLocation } from 'react-router-dom';
import { IUser, Role } from '../../model/data.model';

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

interface IFile {
  lastModified: number;
  lastModifiedDate: any;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export function User(): JSX.Element {
  const classes = useStyles();
  const dataUser = [
    { name: 'name', type: 'text' },
    { name: 'gender', type: 'select' },
    { name: 'birthday', type: 'date' },
    { name: 'phone', type: 'tel' },
    { name: 'email', type: 'email' },
  ];
  const dataDoctor = [
    { name: 'name', type: 'text' },
    { name: 'birthday', type: 'date' },
    { name: 'gender', type: 'select' },
    { name: 'phone', type: 'tel' },
    { name: 'email', type: 'email' },
    { name: 'speciality', type: 'text' },
    { name: 'category', type: 'text' },
    { name: 'graduation', type: 'text' },
    { name: 'medcenter', type: 'text' },
  ];
  const [formStateUser, setFormStateUser] = useState<IUser>({
    email: '',
    password: '',
    role: Role.Patient,
    category: '',
    experience: '',
    graduation: '',
    id: '',
    img: '',
    medcenter: '',
    name: '',
    phone: '',
    speciality: '',
    gender: '',
    birthday: '',
  });
  const [file, setFile] = useState<FileList>();
  const location = useLocation();
  const [data, setData] = useState<any>(dataUser);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (location.state) {
      setFormStateUser(location.state.user);
      location.state.user.role === 'patient' ? setData(dataUser) : setData(dataDoctor);
    }
  }, [location.state]);
  useEffect(() => {
    if (file) {
      uploudImage(file).then(async (url) => {
        await setFormStateUser((prevState) => ({ ...prevState, img: url }));
        updateObjectField('users', formStateUser.id, { img: url });
      });
    }
  }, [file]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormStateUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveUser = () => {
    if (isEdit) setDocument('users', formStateUser.id, formStateUser);
    setIsEdit(!isEdit);
  };
  return (
    <div className={style.wrapper}>
      <Grid className={style.item__profile} container justify="center" alignItems="center">
        <Card className={style.card}>
          <CardContent className={style.cardContent}>
            <Grid className={style.avatar} item md={4} sm={4}>
              <Avatar style={{ height: '100px', width: '100px' }} src={formStateUser.img}></Avatar>
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
              {data.map((item) => {
                return (
                  <TextFieldEditor
                    key={item.name}
                    name={item.name}
                    type={item.type}
                    isEdit={isEdit}
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
      <Grid className={style.item__nearest_visits}>
        <Card className={style.cardVisit}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Nearest visits
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={style.item__past_visits}>
        <Card className={style.cardVisit}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Past visits
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
