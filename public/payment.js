const name = document.getElementById('name');
const cardnum = document.getElementById('cardnum');
const cvv = document.getElementById('cvv');
const form = document.getElementById('form')
const edate = document.getElementById('edate');
const errelement = document.getElementById('err');
const cday = new Date();
var day = cday.getDate();
var month = cday.getMonth() + 1;
var year = cday.getFullYear();
var cdate = 0;

if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}
cdate = year + '-' + month + '-' + day;
edate.setAttribute("min", cdate);


form.addEventListener('submit', (e) => {
    let errmessages = [];
    if (name.value === '' || name.value === null) {
        errmessages.push('Please Enter Your Name');
    }

    if (cardnum.value === '' || cardnum.value === null || cardnum.value.length !== 16) {
        errmessages.push('Card Number must be 16 digits');
    }

    if (cvv.value === '' || cvv.value === null || cvv.value.length !== 3) {
        errmessages.push('CVV Number must be 3 digits');
    }

    if (edate.value === '' || edate.value === null) {
        errmessages.push('Please Enter the Expiry Date');
    }

    if (errmessages.length > 0) {
        e.preventDefault();
        errelement.innerText = errmessages.join(', ');
        // jquery
        setInterval(() => {
            $("#err").animate({ color: 'red' }, 1000);
            $("#err").animate({ color: 'black' }, 1000);
            $("#err").fadeOut(1000);
            $("#err").fadeIn(1000);
        }, 5000);


    }
    else {
        alert('Payment Successful');
    }

})




