import { AlertColor } from '@mui/material/Alert';

export type NotificationProps = {
    snackbarOpen: boolean;
    setSnackbarOpen: (value: boolean) => void;
    snackbarType: AlertColor;
    result: string;
};
