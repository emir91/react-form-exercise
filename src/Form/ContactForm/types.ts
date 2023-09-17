type FormData = {
    name: string,
    email: string,
    message: string,
};

export type FormProps = {
  emailFormData: FormData,
  errors: FormData,
  result: string,
  status: string,
  formDataChangeHandler?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  formDataBlurHandler?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
};
