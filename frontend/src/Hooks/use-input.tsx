import { useState, ChangeEvent, FocusEvent } from 'react';
import { UseInputResult } from '../Utils/types';

const useInput = (initialValue: string = '', validator: RegExp = /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}]+$/u): UseInputResult => {
    const [value, setValue] = useState<string>(initialValue),
        [isValid, setIsValid] = useState<boolean>(true),
        [isFocused, setIsFocused] = useState<boolean>(false),
        validate = (_value: string) => validator.test(_value) && _value.length > 0 && isFocused,
        handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setIsFocused(true);
            setValue(event.target.value);
            setIsValid(validate(event.target.value));
        },
        handleBlur = (event: FocusEvent<HTMLInputElement>) => {
            setIsValid(validate(event.target.value));
        };

    return {
        value,
        isValid,
        handleChange,
        handleBlur,
    };
};

export default useInput;