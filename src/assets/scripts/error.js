var errorbox;
var closeerror;
var errorboxtxt;

function closefunction() {
    var errorbox = document.getElementById('error-box');
    errorbox.style.display = 'none';
}

window.addEventListener('load', loadingfunction);
window.addEventListener('online', onlinefunction);
window.addEventListener('offline', offlinefunction);

function closeautofunction() {
    var errorbox = document.getElementById('error-box');
    if (errorbox.style.display === "block") {
        setTimeout(closeautotimmerfunction, 3000);
        function closeautotimmerfunction() {
            var errorbox = document.getElementById('error-box');
            errorbox.style.display = "none";
        }
    }
}

function loadingfunction() {
    var errorbox = document.getElementById('error-box');
    var errorboxtxt = document.getElementById('error-box-txt');
    errorbox.style.display = 'block';
    errorbox.style.backgroundColor = "rgba(255, 166, 0,0.7)";
    errorboxtxt.innerHTML = "Successfully loaded";

    closeautofunction();
}

function onlinefunction() {
    var errorbox = document.getElementById('error-box');
    var errorboxtxt = document.getElementById('error-box-txt');
    errorbox.style.display = 'block';
    errorbox.style.backgroundColor = "rgba(0, 255, 0,0.7)";
    errorboxtxt.innerHTML = "Internet access is connected";

    closeautofunction();
}

function offlinefunction() {
    var errorbox = document.getElementById('error-box');
    var errorboxtxt = document.getElementById('error-box-txt');
    errorbox.style.display = 'block';
    errorbox.style.backgroundColor = "rgba(255, 0, 0,0.7)";
    errorboxtxt.innerHTML = "Internet access was interrupted";

    closeautofunction();
}