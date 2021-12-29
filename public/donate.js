function validate() {
    var a = document.getElementById('source').value;

    if (a == "") {
        alert("Source Must be entered");
        return false;
    }

    var b = document.getElementById('Destination').value;

    if (b == "") {
        alert("Destination Must be entered");
        return false;
    }

    var c = document.getElementById('date').value;

    if (c == "") {
        alert("Date Must be entered");
        return false;
    }
    
   if(a && b && c)
   {
       window.open("ViewTicket.html");
   }
}