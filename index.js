/*!
* IconPicker DEMO ('https://github.com/furcan/IconPicker')
* Version: 1.5.0
* Author: Furkan MT ('https://github.com/furcan')
* Dependencies: FontAwesome v5.11.2 (https://fontawesome.com/license/free)
* Copyright 2019 IconPicker, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

// DEMO: IconPicker on
IconPicker.Init({
    jsonUrl: 'dist/iconpicker-1.5.0.json',
});
IconPicker.Run('#GetIconPicker', function () {
    console.log('Icon Picker');
});
// IconPicker.Run('#GetIconPicker');
// DEMO: IconPicker off


// DEMO: Notiflix Notification Library on
Notiflix.Notify.Init({
    width: '340px',
    plainText: false,
    messageMaxLength: 4000,
    googleFont: false,
    fontFamily: 'Muli',
    fontSize: '14px',
    timeout: 4500,
    position: 'right-bottom',
    cssAnimationStyle: 'from-bottom',
});
// DEMO: Notiflix Notification Library off

// DEMO: Tooltip on
function furcanTooltip(tooltip) {
    $('body > .tooltip').remove();
    $(tooltip).tooltip({
        trigger: 'hover',
        container: 'body',
    });
}
furcanTooltip('[data-toggle="tooltip"]');

$(document).on('click', function () {
    if ($('body > .tooltip').length > 0) {
        $('body > .tooltip').remove();
    }
});
// DEMO: Tooltip off

// DEMO: Check localstarege and get data on
if (localStorage) {

    // if icon data exist
    var nameData = localStorage.getItem('name');
    var descriptionData = localStorage.getItem('description');
    var iconData = localStorage.getItem('icon');
    if (iconData && nameData && descriptionData) {
        document.getElementById('Name').value = nameData; // dom name value
        document.getElementById('Description').value = descriptionData; // dom description value
        document.getElementById('IconInput').value = iconData; // dom input value
        document.getElementById('IconPreview').className = iconData; // dom preview icon classname
    }
}
// DEMO: Check localstarege and get data off


// DEMO: Form submit listener on
var demoForm = document.getElementById('DemoForm');
demoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    submitFormLocalStorage();
}, false);
// DEMO: Form submit listener off

// DEMO: Form save local storage on
function submitFormLocalStorage() {
    var nameData = document.getElementById('Name').value;
    var descriptionData = document.getElementById('Description').value;
    var iconData = document.getElementById('IconInput').value;

    if (nameData.length > 0 && descriptionData.length > 0 && iconData.length > 0) {

        // local storage
        localStorage.setItem('name', nameData);
        localStorage.setItem('description', descriptionData);
        localStorage.setItem('icon', iconData);

        // code element
        var code = '<span class="l1">?Name=<span class="name">' + nameData + '</span>&Description=<span class="name">' + descriptionData + '</span>&Icon=<span class="name">' + iconData + '</span></span>';
        var codeElement = document.getElementById('DemoCode');
        codeElement.innerHTML = code;

        // success notification
        Notiflix.Notify.Success('Your form successfully saved to LocalStorage.');

    }
    if (nameData.length <= 0) {
        Notiflix.Notify.Failure('Module name is required.');
    }
    if (descriptionData.length <= 0) {
        Notiflix.Notify.Failure('Module description is required.');
    }
    if (iconData.length <= 0) {
        Notiflix.Notify.Failure('Module icon is required.');
    }
}
// DEMO: Form save local storage off


// DEMO: Check Browser on
$(document).on('click', 'button#GetIconPicker', function () {
    // if chrome browser
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        // if protocol not http
        if (window.location.protocol.indexOf('http') <= -1) {
            var theMessage = 'Your protocol is: <b style="transform:scale(1.1);">' + window.location.protocol + '</b> <br />Chrome Browser blocked this request by CORS policy. You can try on Firefox Browser.';
            Notiflix.Notify.Failure(theMessage);
            return false;
        }
    }
});
// DEMO: Check Browser off

// DEMO: Button Highlighted on
$(document).on('mouseenter', 'code span.the-button', function () {
    $('.form-input button#GetIconPicker').addClass('highlighted');
});
$(document).on('mouseleave', 'code span.the-button', function () {
    $('.form-input button#GetIconPicker').removeClass('highlighted');
});
// DEMO: Button Highlighted off

// DEMO: Input Highlighted on
$(document).on('mouseenter', 'code span.the-input', function () {
    $('.form-input div.export').addClass('highlighted');
});
$(document).on('mouseleave', 'code span.the-input', function () {
    $('.form-input div.export').removeClass('highlighted');
});
// DEMO: Input Highlighted off

// DEMO: Icon Highlighted on
$(document).on('mouseenter', 'code span.the-preview', function () {
    $('.form-input div.icon-preview').addClass('highlighted');
});
$(document).on('mouseleave', 'code span.the-preview', function () {
    $('.form-input div.icon-preview').removeClass('highlighted');
});
// DEMO: Icon Highlighted off