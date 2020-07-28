
function showErrorMessage(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


function showSuccessMessage(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
