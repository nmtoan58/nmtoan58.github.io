var setting = document.getElementById('setting');
var cart = document.getElementById('cart-list');

function getCart () {
    cart.classList.toggle("hide-cart");
}

function getSetting() {
    setting.classList.toggle("hide-setting");
}

// if(cart.style.display = 'block'){
//     setting.style.display = 'none';
// }

// else if(setting.style.display = ){
//     setting.style.display = 
// }

function countdown() {
    let now = new Date();
    let eventDate = new Date(2021, 12, 31);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;
    
    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h<10) ? "0" + h: h; 
    m = (m<10) ? "0" + m: m; 
    s = (s<10) ? "0" + s: s; 

    document.getElementById("day").textContent = d;
    document.getElementById("day").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minute").textContent = m;
    document.getElementById("second").textContent = s;
    
}

setInterval(countdown,1000);