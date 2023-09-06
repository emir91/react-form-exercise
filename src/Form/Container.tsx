import React, { useState } from "react";
import { Grid } from "@mui/material";
import { FORM_TITLE } from "./constants";
import ContactForm from "./ContactForm/ContactForm";
import { StyledPaper, FormContainer, FormTitle } from "./styledComponents";

const Container = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: '',
});
const [result, setResult] = useState('');
const [status, setStatus] = useState('Submit');

const resetEmailForm = (): void => {
  setEmailForm({name: '', email: '', message: ''});
}

const formDataChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setEmailForm((prevData) => {
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      return {
        ...prevData,
        [event?.target?.name]: event?.target?.value
      }
    }
    return prevData;
  });
  if (result.length > 0) {
    setResult('');
}
}

  return (
    <FormContainer container justifyContent='center'>
      <StyledPaper elevation={3} >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <FormTitle variant="h4">{FORM_TITLE}</FormTitle>
          </Grid>
          <Grid item>
            <ContactForm emailFormData={emailForm} result={result} status={status} resetEmailForm={resetEmailForm} formDataChangeHandler={formDataChangeHandler}/>
          </Grid>
        </Grid>
      </StyledPaper>
    </FormContainer>
  );
};

export default Container;
