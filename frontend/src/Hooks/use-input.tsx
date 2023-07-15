import { useState, ChangeEvent, FocusEvent } from 'react';
import { UseInputResult } from '../Utils/types';

const useInput = (initialValue: string = '', validator: RegExp = /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}]+$/u): UseInputResult => {
    const [value, setValue] = useState(initialValue),
        [isFocused, setIsFocused] = useState(false),
        isValid = () => validator.test(value),
        handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        },
        handleFocus = (_: FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
        },
        handleBlur = (_: FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
        };

    return {
        value,
        isFocused,
        isValid,
        handleChange,
        handleFocus,
        handleBlur,
    };
};

export default useInput;