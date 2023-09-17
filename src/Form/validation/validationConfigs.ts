import { ValidationConfig, ValidationEvent, Rule } from './types';

export const contactFormConfig: ValidationConfig = {
    name: {
        event: "onChange" as ValidationEvent,
        rules: ["name", "required"] as Rule[]
    },
    email: {
        event: "onBlur" as ValidationEvent,
        rules: ["email", "required"] as Rule[]
    },
    message: {
        event: "onChange" as ValidationEvent,
        rules: ["message", "required"] as Rule[]
    }
};