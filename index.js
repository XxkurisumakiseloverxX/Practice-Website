function DONOTHING() {
    document.title = document.getElementById("iput").value;
}

function loading() {
    let ls = localStorage.getItem('counterLS');
    let ss = sessionStorage.getItem('counterSS');
    if (ls) {
        document.getElementById("counterLS").innerText = ls;
    }
    if (ss) {
        document.getElementById("counterSS").innerText = ss;
    }
}
function incrcountLS(x) {
    let y = JSON.parse(x);
    document.getElementById("counterLS").innerText = ++y;
    localStorage.setItem('counterLS', y);
}
function incrcountSS(x) {
    let y = JSON.parse(x);
    document.getElementById("counterSS").innerText = ++y;
    sessionStorage.setItem('counterSS', y);
}