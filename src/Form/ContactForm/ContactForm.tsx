import React, { useMemo } from "react";
import { Box, Grid } from "@mui/material";
import { NAME_INPUT_LABEL, EMAIL_INPUT_LABEL, TEXTAREA_LABEL, STATUS } from "../constants";
import { StyledInputElement, StyledTextArea, SubmitButton, ErrorMessage } from "../styledComponents";
import { FormProps } from './types';

const ContactForm = ({emailFormData, errors, status, formDataChangeHandler, formDataBlurHandler, formDataSubmitHandler }: FormProps ) => {
  const {email, name, message} = emailFormData;

  const isDisabled = useMemo(() => status !== STATUS.SUBMIT, [status]);

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
          <StyledInputElement name="name" label={NAME_INPUT_LABEL} variant="standard" value={name} onChange={formDataChangeHandler} />
          {errors.name && <ErrorMessage variant="body2">{errors.name}</ErrorMessage>}
        </Grid>
        <Grid item>
          <StyledInputElement name="email" label={EMAIL_INPUT_LABEL} variant="standard" value={email} onChange={formDataChangeHandler} onBlur={formDataBlurHandler}/>
          {errors.email && <ErrorMessage variant="body2">{errors.email}</ErrorMessage>}
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
          {errors.message && <ErrorMessage variant="body2">{errors.message}</ErrorMessage>}
        </Grid>
        <Grid item>
          <SubmitButton variant="contained" onClick={formDataSubmitHandler} disabled={isDisabled}>{status}</SubmitButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
