const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(inputRef.value.length);
    inputRef.classList.add('invalid');
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.replace('invalid', 'valid');
    } 
};
