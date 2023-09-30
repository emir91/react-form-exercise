export const VALIDATION_RULES = {
    email: {
      regex: /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Wrong email'
    },
    name: {
      regex: /^[a-zA-ZšđčćžŠĐČĆŽ]*$/,
      message: 'Name can contain only letters'
    },
    message: {
      regex: /^[a-zA-ZšđčćžŠĐČĆŽ0-9\s]*$/,
      message: 'Message can contain only letters and numbers'
    },
    required: {
      regex: /.+/,
      message: 'This field is required'
    }
};

export enum VALIDATION_EVENTS {
  ON_CHANGE = "onChange",
  ON_BLUR = "onBlur"
}

export const REQUIRED = "required"; 





