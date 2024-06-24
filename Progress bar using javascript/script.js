function startProgress() {
    var elem = document.getElementById("progress-bar");
    var width = 0;
    var id = setInterval(frame, 100); // Increase width every 100 milliseconds

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width  + '%';
        }
    }
}
