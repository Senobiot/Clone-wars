import { Grid, IconButton, MenuItem, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import style from './TextFieldEditor.module.scss';

interface Props {
  options: string[];
  name: string;
  formStateUser: string;
  type: string;
  isEdit: boolean;
  handleChange: (e) => void;
}

export function TextFieldEditor({ formStateUser, type, name, isEdit, options, handleChange }: Props): JSX.Element {
  /* const [isEdit, setIsEdit] = useState(false); */
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={3}>
        <Typography className={style.header} color="textSecondary">
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
            /*      onBlur={() => setIsEdit(false)} */
            onChange={handleChange}
            name={name}
            type={type}
            select={type === 'select'}
            autoFocus
            fullWidth
          >
            {options
              ? options.map((item, i) => {
                  if (item)
                    return (
                      <MenuItem key={i} value={item}>
                        {item}
                      </MenuItem>
                    );
                })
              : ''}
          </TextField>
        )}
      </Grid>
      {/*   <Grid item>
        <IconButton id={name} onClick={() => setIsEdit(!isEdit)}>
          <EditIcon />
        </IconButton>
      </Grid> */}
    </Grid>
  );
}
