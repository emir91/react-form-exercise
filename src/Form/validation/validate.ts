import { VALIDATION_RULES, REQUIRED } from "./constants";
import { Rule } from "./types";

export const validateInput = (input: string, rules: Rule[]): string => {
    if (rules.includes(REQUIRED) && !input.trim()) {
        return VALIDATION_RULES[REQUIRED].message;
    }

    for(let rule of rules) {
        if (rule === REQUIRED) continue;

        const { regex, message } = VALIDATION_RULES[rule];

        if(!regex.test(input)) return message;
    }
    
    return '';
}