import { getErrorMsg } from "./validation-Messages";

//valid : true and Invalid:false


const requiredValidator = (value) => {
    return value !== "";
}

const minLengthValidator = (value, errObj) => {
    return value.length >= errObj['length'];
}

const maxLengthValidator = (value, errObj) => {
    return value.length <= errObj['length'];
}

const patternValidator = (value, errObj) => {
    return errObj['regex'].test(value);
}

const checkValidation = (value, err, errObj) => {
    switch (err) {
        case 'required':
            return requiredValidator(value);
        case 'minlength':
            return minLengthValidator(value, errObj);
        case 'maxlength':
            return maxLengthValidator(value, errObj);
        case 'pattern':
            return patternValidator(value, errObj);
    }
}

export const findAllErrors = (validators, value) => {
    if (!validators) { return []; }
    const errors = Object.keys(validators);
    let errorsOccurred = [];

    for (let err of errors) {
        if (!checkValidation(value, err, validators[err])) {
            errorsOccurred.push(getErrorMsg(err, validators[err]));
        }
    }
    return errorsOccurred;
}