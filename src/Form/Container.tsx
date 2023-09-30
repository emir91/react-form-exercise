import React, { useState } from "react";
import { AlertColor } from '@mui/material/Alert';
import { Grid } from "@mui/material";
import useValidation from "./validation/useValidation";
import ContactForm from "./ContactForm/ContactForm";
import Notification from "./Notifications/Notifications";
import { StyledPaper, FormContainer, FormTitle } from "./styledComponents";
import { FORM_TITLE, RESULT, STATUS, ALERT_COLORS, INITIAL_VALUES } from "./constants";
import { contactFormConfig } from './validation/validationConfigs';

const Container = () => {
const [result, setResult] = useState(RESULT.DEFAULT);
const [status, setStatus] = useState(STATUS.SUBMIT);
const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarType, setSnackbarType] = useState<AlertColor>(ALERT_COLORS.SUCCESS);

const { values, setValues, errors, handleChange, handleBlur, areFieldsEmpty } = useValidation(INITIAL_VALUES, contactFormConfig);

const handleSubmit = () => {
  if(areFieldsEmpty(values)) {
    setSnackbarType(ALERT_COLORS.ERROR);
    setResult(RESULT.ERROR);
    setStatus(STATUS.NOT_SENT);
  } else {
    setSnackbarType(ALERT_COLORS.SUCCESS);
    setResult(RESULT.SUCCESS);
    setStatus(STATUS.SENT);
  }

  setSnackbarOpen(true);
  setValues(INITIAL_VALUES);

  setTimeout(() => {
    setSnackbarOpen(false);
    setResult(RESULT.DEFAULT);
    setStatus(STATUS.SUBMIT);
  }, 5000)
  
};

  return (
    <FormContainer container justifyContent='center'>
      {snackbarOpen && (
        <Notification 
          snackbarOpen={snackbarOpen} 
          setSnackbarOpen={setSnackbarOpen} 
          snackbarType={snackbarType} 
          result={result}
        />
      )}
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
            <ContactForm 
              emailFormData={values} 
              errors={errors}  
              status={status} 
              formDataChangeHandler={handleChange} 
              formDataBlurHandler={handleBlur}
              formDataSubmitHandler={handleSubmit}
            />
          </Grid>
        </Grid>
      </StyledPaper>
    </FormContainer>
  );
};

export default Container;
