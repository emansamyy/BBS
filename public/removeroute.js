const sel = document.getElementById('sel');
const form = document.getElementById('form');
const errelement = document.getElementById('err');



form.addEventListener('submit', (e) => {
    let errmessages = [];
    if (sel.value === '' || sel.value === null) {
        errmessages.push('Please Select A Route');
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
        alert('Removed Route Successfully');
    }

})




