let banner = document.querySelector('#banner');
let dayOfWeek = new Date().getDay();
// if Friday displays this
if (dayOfWeek == 3) {
    banner.style.display = "block";
}

