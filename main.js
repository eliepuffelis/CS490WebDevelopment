function showMenu(){
    var menu = document.getElementById("menu");
    menu.style.right = '0';
    showDarkOverlay();
}
function hideMenu(){
    var menu = document.getElementById("menu");
    menu.style.right = '-50vw';
    hideDarkOverlay();
}
function showDarkOverlay(){
    var darkOverlay = document.getElementById("dark-overlay");
    darkOverlay.style.visibility = 'visible';
    darkOverlay.style.opacity = '1';
}
function hideDarkOverlay(){
    var darkOverlay = document.getElementById("dark-overlay");
    darkOverlay.style.visibility = 'hidden';
    darkOverlay.style.opacity = '0';
}