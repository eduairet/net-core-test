interface Validation {
    employee: RegExp;
    department: RegExp;
}

export const formValidation: Validation = {
    // eslint-disable-next-line no-useless-escape
    employee: /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}\s\.]{255}$/u,
    // eslint-disable-next-line no-useless-escape
    department: /^[\p{L}\p{M}\p{P}\p{Z}\p{S}\p{N}\s\d\.]{80}$/u
}