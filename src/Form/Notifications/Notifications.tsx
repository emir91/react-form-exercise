import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { NotificationProps } from "./types";

const Notification = ({ snackbarOpen, setSnackbarOpen, snackbarType, result }: NotificationProps) => {
    const onCloseHandler = () => {
        setSnackbarOpen(false);
    };
    
    return (
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={onCloseHandler}>
          <Alert onClose={onCloseHandler} severity={snackbarType}>
            {result}
          </Alert>
        </Snackbar>
    );
}
 
export default Notification;