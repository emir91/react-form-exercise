import React, { useState } from "react";
import { validateInput } from "./validate";
import { ValidationConfig } from "./types";
import { VALIDATION_EVENTS } from "./constants";

function useValidation<T extends Record<string, string>> (initialValues: T, validationConfig: ValidationConfig) {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<T>(
        Object.keys(initialValues).reduce(
            (acc, key) => ({ ...acc, [key]: '' }),
            {} as T
        )
    );

    const { ON_BLUR, ON_CHANGE } = VALIDATION_EVENTS;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;
        
        setValues(prev => ({ ...prev, [name]: value }));

        if(validationConfig[name]?.event === ON_CHANGE) {
            const error = validateInput(value, validationConfig[name]?.rules);
            setErrors(prev => ({ ...prev, [name]: error}));
        }
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;
        
        if(validationConfig[name].event === ON_BLUR) {
            const error = validateInput(value, validationConfig[name].rules);
            setErrors(prev => ({ ...prev, [name]: error}));
        }
    }

    
    return {values, errors, handleChange, handleBlur};
}

export default useValidation;
