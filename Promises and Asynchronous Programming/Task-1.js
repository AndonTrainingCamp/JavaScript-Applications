/*jslint devel: true */
/*jslint es6 */
'use strict';

$(document).ready(function () {
    let $div = $('#myLocation');
    navigator.geolocation.getCurrentPosition(function (position) {
        let myLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        let map = new google.maps.Map(document.getElementById('myLocation'), {
            center: myLatLng,
            zoom: 4
        });
        let marker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            title: 'User position'
        });
    });
});
