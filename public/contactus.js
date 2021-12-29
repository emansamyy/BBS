const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const rmessage = document.getElementById('omessage');
this.flag3 = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinput();
    console.log = "ana te3bt";
    if (this.flag3) {
        $(document).ready(function () {
            $("#oneoneone").fadeOut();
            window.location.href = 'home.html';

        });
    }
    
    else {
        this.flag3 = true;
    }
});

function checkinput() {
    const emailvalue = email.value.trim();
    const fullnameValue = fullname.value.trim();
    const messageValue = rmessage.value.trim();
    if (emailvalue === '') {
        seterror(email, 'Email cannot be empty');
    }
    else if (!checkmail(emailvalue)) {
        seterror(email, 'not a valid Email');
    } else {
        setsuccess(email);
    }

    if (fullnameValue === '') {
        seterror(fullname, 'Full Name cannot be blank');
    } else {
        setsuccess(fullname);
    }

    if (messageValue === '') {
        seterror(rmessage, 'You must type in a message');
    } else {
        setsuccess(rmessage);
    }

}
function seterror(input, message) {
    const csform = input.parentElement;
    const small = csform.querySelector('small');
    small.innerText = message;
    csform.className = 'form-controll ghalat';
    this.flag3 = false;

}
function setsuccess(input) {
    const csform = input.parentElement;
    csform.className = 'form-controll sah';
}
function checkmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}