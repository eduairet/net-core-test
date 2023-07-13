import { useState, ChangeEvent, FocusEvent } from 'react';
import { UseInputResult } from '../../Utils/types';

const useInput = (initialValue: string = '', validator: RegExp = /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}]+$/u): UseInputResult => {
    const [value, setValue] = useState(initialValue),
        [isFocused, setIsFocused] = useState(false),
        isValid = (str: string) => validator.test(str),
        handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!isValid(event.target.value)) return;
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
        handleChange,
        handleFocus,
        handleBlur,
    };
};

export default useInput;