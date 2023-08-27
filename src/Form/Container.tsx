import React from "react";
import { Grid } from "@mui/material";
import { FORM_TITLE } from "./constants";
import ContactForm from "./ContactForm/ContactForm";
import { StyledPaper, FormContainer, FormTitle } from "./styledComponents";

const Container = () => {
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
            <ContactForm />
          </Grid>
        </Grid>
      </StyledPaper>
    </FormContainer>
  );
};

export default Container;
