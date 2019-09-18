const maina=document.querySelectorAll('.karte');

function spiest(){
    this.classList.toggle('flip');
}
maina.forEach(karte =>karte.addEventListener('click', spiest));