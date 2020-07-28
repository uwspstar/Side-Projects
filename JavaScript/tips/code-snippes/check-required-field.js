function checkRequiredField(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}


function checkRequiredField(inputArr) {
    inputArr.forEach((input) => {
        input.value.trim() === '' ?
            showError(input, `${getFieldName(input)} is required`) :
            showSuccess(input);
    });
}