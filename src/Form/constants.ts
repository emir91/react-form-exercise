export const FORM_TITLE = 'Contact Me';

export const BUTTON_LABEL = 'Submit';

export const NAME_INPUT_LABEL = 'Name*';

export const EMAIL_INPUT_LABEL = 'Email address*';

export const TEXTAREA_LABEL = 'message (max 300 characters)*';

export const INITIAL_VALUES = {
    name: '',
    email: '',
    message: '',
};

export enum RESULT {
    DEFAULT = '',
    SUCCESS = 'Message has been sent',
    ERROR = 'All fields must be filled',
};

export enum STATUS {
    SENT = 'Sent',
    SUBMIT = 'Submit',
    NOT_SENT = 'Not sent'
};

export enum ALERT_COLORS {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
};

