type EmailFormData = {
    name: string,
    email: string,
    message: string,
};

export type FormProps = {
  emailFormData: EmailFormData,
  result: string,
  status: string,
  resetEmailForm: () => void,
  formDataChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
};
