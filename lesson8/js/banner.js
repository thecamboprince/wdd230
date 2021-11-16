let banner = document.querySelector('#banner');
let dayOfWeek = new Date().getDay();
// if Friday displays this
if (dayOfWeek == 5) {
    banner.style.display = "block";
}

