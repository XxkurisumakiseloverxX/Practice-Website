function DONOTHING() {
    document.title = document.getElementById("iput").value;
}

function loading() {
    let ls = localStorage.getItem('counterLS');
    let ss = sessionStorage.getItem('counterSS');
    document.getElementById("counterLS").innerText = ls ?? '0';
    document.getElementById("counterSS").innerText = ss ?? '0';
}
function incrcountLS() {
    let count = Number(localStorage.getItem('counterLS') ?? 0) + 1;
    document.getElementById("counterLS").innerText = count;
    localStorage.setItem('counterLS', count);
}
function incrcountSS() {
    let count = Number(sessionStorage.getItem('counterSS') ?? 0) + 1;
    document.getElementById("counterSS").innerText = count;
    sessionStorage.setItem('counterSS', count);
}
