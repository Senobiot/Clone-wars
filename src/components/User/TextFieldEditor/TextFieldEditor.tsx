import { Grid, IconButton, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import style from './TextFieldEditor.module.scss';

interface Props {
  name: string;
  formStateUser: string;
  type: string;
  handleChange: (e) => void;
}

export function TextFieldEditor({ formStateUser, type, name, handleChange }: Props): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Grid container direction="row" justify="space-between" alignItems="center" spacing={1}>
      <Grid item xs={2}>
        <Typography className={style.header} variant="subtitle1">
          {name[0].toUpperCase() + name.slice(1)}
        </Typography>
      </Grid>
      <Grid item xs>
        {!isEdit ? (
          <Typography className={style.item} variant="subtitle1">
            {formStateUser}
          </Typography>
        ) : (
          <TextField
            id={name}
            value={formStateUser}
            onBlur={() => setIsEdit(false)}
            onChange={handleChange}
            name={name}
            type={type}
            autoFocus
            fullWidth
          />
        )}
      </Grid>
      <Grid item>
        <IconButton id={name} onClick={() => setIsEdit(!isEdit)}>
          <EditIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
