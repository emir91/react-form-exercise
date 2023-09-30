import { VALIDATION_RULES } from "./constants"

export type ValidationEvent = "onChange" | "onBlur";
export type Rule = "name" | "email" | "message" | "required";

export type FieldConfig = {
    event: ValidationEvent;
    rules: Rule[];
};

export type ValidationConfig = {
    [key: string]: FieldConfig;
};
export type FieldName = keyof typeof VALIDATION_RULES;

export type ValidationRules = {
    [key: string]: (value: string) => string;
}

export type FieldValues = {
    [key: string]: string;
}

export type ValidationErrors = {
    [key in keyof FieldValues]: string;
}
