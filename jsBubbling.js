function boxOut() {
    const pa = document.getElementById('parent');
    pa.style.backgroundColor = "pink";
}

function boxIn() {
    const ch = document.getElementById('child');
    ch.style.backgroundColor = "#f778ad"; 
}




const parent = document.querySelector('#parent');
parent.addEventListener('click', boxOut);

const child = document.querySelector('#child');
child.addEventListener('click', boxIn);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const pa = document.getElementById('parent');
    pa.style.backgroundColor = "rgb(108, 124, 138)"; 

    const ch = document.getElementById('child');
    ch.style.backgroundColor = "rgb(254, 240, 255)";  
})