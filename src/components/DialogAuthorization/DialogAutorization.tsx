import { Dialog, IconButton, Slide, SlideProps } from '@material-ui/core';
import React, { useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Authorization from '../Authorization/Authorization';
import './DialogAutorization.scss';

const Transition = React.forwardRef(function Transition(props: SlideProps, ref): JSX.Element {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface Props {
    openDialog: boolean;
    handleClickOpenDialog: () => void;
}

export function DialogAutorization({ openDialog, handleClickOpenDialog }: Props): JSX.Element {
    const [open, setOpen] = React.useState<boolean>(false);
    useEffect(() => setOpen(openDialog), [openDialog]);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseDiolog = () => {
        setOpen(false);
        handleClickOpenDialog();
    };
    return (
        <Dialog fullScreen open={open} onClose={handleCloseDiolog} TransitionComponent={Transition}>
            <IconButton className="button" color="secondary" aria-label="add an alarm" onClick={handleCloseDiolog}>
                <CloseIcon />
            </IconButton>
            <Authorization />
        </Dialog>
    );
}
