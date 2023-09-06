import { Button, Paper, Grid, TextField, Typography } from "@mui/material";
import { styled } from '@mui/system';

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(7.5),
}));

export const FormContainer = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

export const StyledInputElement = styled(TextField)(({ theme }) => ({
    '& .MuiInput-input': {
        width: 400,
    }
}));

export const StyledTextArea = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        width: 400,
    }
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    letterSpacing: '.2rem',
    color: '#878d96'
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 8)
}));
