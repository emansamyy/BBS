const form = document.getElementById("form");
const fullname = document.getElementById("fname");
const SSID = document.getElementById("SSIDx");
const weight = document.getElementById("Weightx");
const email = document.getElementById("email");

this.flag = true;

var delayInMilliseconds = 500;
form.addEventListener("submit", (e) => {
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
  } else {
    this.flag = true;
  }
});

function checkinput() {
  const fullnamev = fullname.value.trim();
  const SSIDv = SSID.value.trim();
  const Weightv = weight.value.trim();
  const emailvalue = email.value.trim();

  if (fullnamev === "") {
    seterror(fullname, " Full Name cannot be empty.");
  } else if (checkfullname(fullnamev)) {
    seterror(fullname, "Full Name cannot be a number");
  } else {
    setsuccess(fullname);
  }

  if (SSIDv === "") {
    seterror(SSID, " Socail Security Number can not be empty");
  
  } else {
    setsuccess(SSID);
  }

  if (Weightv === "") {
    seterror(weight, " Weight can not be empty.");

  } else {
    setsuccess(weight);
  }

  if (emailvalue === "") {
    seterror(email, "Email address cannot be empty.");
  } else if (!checkmail(emailvalue)) {
    seterror(email, "This is not a valid Email.");
  } else {
    setsuccess(email);
  }
}

function seterror(input, message) {
 
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-controll ghalat";
  this.flag = false;
}
function setsuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-controll sah";
}
function checkmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function checkfullname(username) {
  return /^\d+$/.test(username);
}
function checkSSID(SSID) {
  return /^\d+$/.test(SSID);
}

function checkWeight(weight) {
  return /^\d+$/.test(weight);
}

/*
check mail regex(regular expressions)
3ashan a-check eno email bgad
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
