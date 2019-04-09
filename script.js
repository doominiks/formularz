const form = document.querySelector('.info-form');
const nameInput = document.querySelector('.info-form__input--name');
const formValidation = () => {
    const name = document.querySelector('.info-form__input--name');
    const email = document.querySelector('.info-form__input--email');
    const phoneInput = document.querySelector('.info-form__input--mobile');

    if (name.value == "") {
        alert('Please enter a name.')
        return false
    }

    if (document.info.occupation.selectedIndex == 0) {
        alert('Please choose your occupation.');
        document.info.occupation.focus();
        return false
    }

    if (phoneInput.value == '' || !phoneNumber(phoneInput.value)) {
        alert('Please enter a phone number.')
        return false
    }

    if (email.value == "") {
        alert('Please enter an email.')
        return false
    }

    if (document.info.city.selectedIndex == 0) {
        alert('Please choose your City.');
        document.info.city.focus();
        return false
    }
    return true
}

const lettersOnly = (input) => {
    const regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, '');
}

const phoneNumber = (inputtxt) => {
    const phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (inputtxt.match(phoneNumber)) {
        return true;
    } else {
        alert('Enter a correct number (9 digits)')
        return false;
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation()) {
        form.submit();
    };
})

nameInput.addEventListener('keyup', () => lettersOnly(nameInput))