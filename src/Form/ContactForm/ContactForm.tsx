import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { NAME_INPUT_LABEL, EMAIL_INPUT_LABEL, TEXTAREA_LABEL } from "../constants";
import { StyledInputElement, StyledTextArea, SubmitButton } from "../styledComponents";
import { FormProps } from './types';

const ContactForm = ({emailFormData, result, status, resetEmailForm, formDataChangeHandler}: FormProps ) => {
  const {email, name, message} = emailFormData;

  return (
    <Box component="form">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <StyledInputElement name="name" label={NAME_INPUT_LABEL} variant="standard" value={name} onChange={formDataChangeHandler}/>
        </Grid>
        <Grid item>
          <StyledInputElement name="email" label={EMAIL_INPUT_LABEL} variant="standard" value={email} onChange={formDataChangeHandler}/>
        </Grid>
        <Grid item xs={9}>
          <StyledTextArea
            label={TEXTAREA_LABEL}
            multiline
            rows={4}
            value={message}
            onChange={formDataChangeHandler}
            name="message"
          />
        </Grid>
        <Grid item>
          <SubmitButton variant="contained">{status}</SubmitButton>
          <Typography variant="h3">{result}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
