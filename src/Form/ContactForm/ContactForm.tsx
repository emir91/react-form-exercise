import React from "react";
import { Box, Grid } from "@mui/material";
import { BUTTON_LABEL } from "../constants";
import { StyledFromElement, StyledTextArea, SubmitButton } from "../styledComponents";

const ContactForm = () => {
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
          <StyledFromElement label="Name*" variant="standard" />
        </Grid>
        <Grid item>
          <StyledFromElement label="Email address" variant="standard" />
        </Grid>
        <Grid item xs={9}>
          <StyledTextArea
            label="message (max 300 characters)*"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <SubmitButton variant="contained">{BUTTON_LABEL}</SubmitButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
