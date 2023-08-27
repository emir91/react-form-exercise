import React from "react";
import { Box, Grid } from "@mui/material";
import { BUTTON_LABEL, NAME_INPUT_LABEL, EMAIL_INPUT_LABEL, TEXTAREA_LABEL } from "../constants";
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
          <StyledFromElement label={NAME_INPUT_LABEL} variant="standard" />
        </Grid>
        <Grid item>
          <StyledFromElement label={EMAIL_INPUT_LABEL} variant="standard" />
        </Grid>
        <Grid item xs={9}>
          <StyledTextArea
            label={TEXTAREA_LABEL}
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
