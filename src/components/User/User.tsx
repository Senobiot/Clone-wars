import { Avatar, createStyles, Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import style from './User.module.scss';
import { TextFieldEditor } from './TextFieldEditor/TextFieldEditor';
import { PhotoCamera } from '@material-ui/icons';
import { getImageUrl, uploudImage } from '../../services/updateFirebase';

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
    { name: 'birthday', type: 'date' },
    { name: 'phone', type: 'tel' },
    { name: 'email', type: 'email' },
  ];
  const dataDoctor = [
    { name: 'name', type: 'text' },
    { name: 'birthday', type: 'date' },
    { name: 'phone', type: 'tel' },
    { name: 'email', type: 'email' },
    { name: 'speciality', type: 'text' },
    { name: 'category', type: 'text' },
    { name: 'graduation', type: 'text' },
    { name: 'medcenter', type: 'text' },
  ];
  const [formStateUser, setFormStateUser] = useState({ name: '', birthday: '', phone: '', email: '' });
  const [file, setFile] = useState<FileList>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (file) {
      uploudImage(file);
      getImageUrl(file).then((url) => setImage(url));
      console.log();
    }
  }, [file]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormStateUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={style.wrapper}>
      <Grid className={style.wrapper} container direction="column" justify="space-around" alignItems="center">
        <Grid className={style.avatar} item>
          <Avatar style={{ height: '100px', width: '100px' }} src={image ? image : ''}></Avatar>
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
        {dataUser.map((item, i) => {
          return (
            <TextFieldEditor
              key={item.name}
              name={item.name}
              type={item.type}
              formStateUser={formStateUser[item.name]}
              handleChange={handleChange}
            />
          );
        })}
      </Grid>
    </div>
  );
}
