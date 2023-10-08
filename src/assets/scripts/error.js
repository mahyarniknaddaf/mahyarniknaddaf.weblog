// var errorbox;
// var closeerror;
// var errorboxtxt;
// function closefunction() {
//     var errorbox = document.getElementById('error-box');
//     errorbox.style.display = 'none';
// }

// window.addEventListener('load', loadingfunction);
// window.addEventListener('online', onlinefunction);
// window.addEventListener('offline', offlinefunction);

// function closeautofunction() {
//     var errorbox = document.getElementById('error-box');
//     if (errorbox.style.display === "block") {
//         setTimeout(closeautotimmerfunction, 3000);
//         function closeautotimmerfunction() {
//             errorbox = document.getElementById('error-box');
//             errorboxtimmer = document.getElementById('error-box-timmer');
//             errorbox.style.display = "none";

        
//         }
//     }
// }

// function loadingfunction() {
//     errorbox = document.getElementById('error-box');
//     errorboxtxt = document.getElementById('error-box-txt');
//     errorbox.style.display = 'block';
//     errorbox.style.backgroundColor = "rgba(255, 166, 0,0.7)";
//     errorboxtxt.innerHTML = "Successfully loaded";

//     closeautofunction();
// }

// function onlinefunction() {
//     errorbox = document.getElementById('error-box');
//     errorboxtxt = document.getElementById('error-box-txt');
//     errorbox.style.display = 'block';
//     errorbox.style.backgroundColor = "rgba(0, 255, 0,0.7)";
//     errorboxtxt.innerHTML = "Internet access is connected";

//     closeautofunction();
// }

// function offlinefunction() {
//     errorbox = document.getElementById('error-box');
//     errorboxtxt = document.getElementById('error-box-txt');
//     errorbox.style.display = 'block';
//     errorbox.style.backgroundColor = "rgba(255, 0, 0,0.7)";
//     errorboxtxt.innerHTML = "Internet access was interrupted";

//     closeautofunction();
// }