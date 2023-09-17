import React, { useState } from "react";
import { Grid } from "@mui/material";
import { FORM_TITLE } from "./constants";
import useValidation from "./validation/useValidation";
import ContactForm from "./ContactForm/ContactForm";
import { StyledPaper, FormContainer, FormTitle } from "./styledComponents";
import { contactFormConfig } from './validation/validationConfigs';

const Container = () => {
const initialValues = {
  name: '',
  email: '',
  message: '',
}

const [result, setResult] = useState('');
const [status, setStatus] = useState('Submit');

const { values, errors, handleChange, handleBlur } = useValidation(initialValues, contactFormConfig);

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
            <ContactForm emailFormData={values} errors={errors} result={result} status={status} formDataChangeHandler={handleChange} formDataBlurHandler={handleBlur}/>
          </Grid>
        </Grid>
      </StyledPaper>
    </FormContainer>
  );
};

export default Container;
