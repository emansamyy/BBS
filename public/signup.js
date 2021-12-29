const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
this.flag = true;
var usernameRegex = /^[a-zA-Z0-9]+$/;
var delayInMilliseconds = 500;
form.addEventListener('submit', (e) => {
   e.preventDefault();
   checkinput();
   console.log("checkinput called");
   console.log("flag : ", this.flag);

   if (this.flag) {
      console.log("im in");
      $(document).ready(function () {
         console.log("in document");
         console.log("in animation");
         $("#one").fadeOut();

         /* $("#two").fadeOut("slow");
          $("#three").fadeOut("3000");
          $("#four").fadeOut("3500");*/
      });
     /* setTimeout(function () {
         window.location.href = 'home.html';
      }, delayInMilliseconds);*/
   }
   else {
      this.flag = true;
   }
});

function checkinput() {
   const usernamevalue = username.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();
   const emailvalue = email.value.trim();
   if (usernamevalue === '') {

      seterror(username, ' Username cannot be empty.');

   } else if (checkusername(usernamevalue)) {

      seterror(username, 'username cannot be a number');

   }
   else {
      setsuccess(username);
   }
   if (emailvalue === '') {
      seterror(email, 'Email cannot be empty.');
   }
   else if (!checkmail(emailvalue)) {
      seterror(email, 'This is not a valid Email.');
   } else {
      setsuccess(email);
   }
   if (passwordValue === '') {
      seterror(password, 'Password cannot be blank.');
   } else {
      setsuccess(password);
   }

   if (password2Value === '') {
      seterror(password2, 'Please enter the password again.');
   } else if (passwordValue !== password2Value) {
      seterror(password2, 'Passwords does not match.');
   } else {
      setsuccess(password2);
   }

}

function seterror(input, message) {
   console.log("error");
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   small.innerText = message;
   formControl.className = 'form-controll ghalat';
   this.flag = false;
}
function setsuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-controll sah';
}
function checkmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function checkusername(username) {
   return /^\d+$/.test(username);
}

/*
check mail regex(regular expressions)
3ashan a-check eno email bgad
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
