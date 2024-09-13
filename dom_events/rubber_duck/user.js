const submitForm = document.getElementById('userForm');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    clearErrors();

    let hasError = false;

    if (!firstName) {
        showError('firstNameError', 'First name is required');
        hasError = true;
    }

    if (!lastName) {
        showError('lastNameError', 'Last name is required');
        hasError = true;
    }

    if (!email) {
        showError('emailError', 'Email is required');
        hasError = true;
    } else if (!email.endsWith('@cphbusiness.dk')) {
        showError('emailError', 'Email must be from cphbusiness.dk');
        hasError = true;
    }

    if (!age) {
        showError('ageError', 'Age is required');
        hasError = true;
    }

    if (!hasError) {
        submitForm.submit();
    }
});

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

function clearErrors() {
    document.querySelectorAll('.error').forEach((error) => {
        error.textContent = '';
    });
}
