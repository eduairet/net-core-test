interface Validation {
    employee: RegExp;
    department: RegExp;
}

export const formValidation: Validation = {
    // eslint-disable-next-line no-useless-escape
    employee: /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}\s\.]{2,255}$/u,
    // eslint-disable-next-line no-useless-escape
    department: /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}\s\d\.]{2,80}$/u
}