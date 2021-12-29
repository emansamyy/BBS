const sel = document.getElementById('sel');
const from = document.getElementById('from');
const to = document.getElementById('to');
const time = document.getElementById('time');
const form = document.getElementById('form');
const errelement = document.getElementById('err');

form.addEventListener('submit', (e) => {
    let errmessages = [];
    if (sel.value === '' || sel.value === null) {
        errmessages.push('Please Select A Route');
    }

    if (from.value === '' || from.value === null) {
        errmessages.push('Please Enter The Origin');
    }

    if (to.value === '' || to.value === null) {
        errmessages.push('Please Enter The Destination');
    }
    if (time.value === '' || from.value === null) {
        errmessages.push('Please Enter The Trip Time');
    }


    if (errmessages.length > 0) {
        e.preventDefault()
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
        alert('Route Edited Successfully');
    }

})
