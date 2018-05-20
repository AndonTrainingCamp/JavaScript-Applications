/*jslint devel: true */
/*jslint es6 */
'use strict';

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    wait2sec().then(redirectToGoogle);
}

function wait2sec () {
    return new Promise (resolve => {
        window.setTimeout(resolve, 2000);
    });
}

function redirectToGoogle () {
    window.location.href = 'http://www.google.bg';
}
