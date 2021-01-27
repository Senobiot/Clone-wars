import { Dialog, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export interface SimpleDialogProps {
  open: boolean;

  onClose: (value: string) => void;
}

export function DialogRole(props: SimpleDialogProps): JSX.Element {
  const { onClose, open } = props;

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select role</DialogTitle>
      <List>
        <ListItem button onClick={() => handleListItemClick('patient')}>
          <ListItemText primary="Patient" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick('doctor')}>
          <ListItemText primary="Doctor" />
        </ListItem>
      </List>
    </Dialog>
  );
}
