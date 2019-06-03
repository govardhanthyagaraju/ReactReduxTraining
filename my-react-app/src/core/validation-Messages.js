const ERROR_MESSAGES =
{
    required: () => ' This field is required',
    minlength: (param) => ` Min ${param.length} chars is required `,
    maxlength: (param) => ` Max ${param.length} chars is allowed`,
    pattern: (param) => ' Incorrect format entered'
};

export const getErrorMsg = (err, errorObj) => {
    return ERROR_MESSAGES[err](errorObj);
}