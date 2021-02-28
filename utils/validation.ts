export const extractErrorMessagesObjectFromRawValidatorMessages = (errorMessages) => {
    const errorMessageObject = {};

    errorMessages.forEach(rawMessageString => {
        const [field, message] = rawMessageString.split('$');
        errorMessageObject[field] = message;
    });

    return errorMessageObject;
}