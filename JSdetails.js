
function chg(event) {
const text = document.getElementById("text").textContent;
if(text==="Show details")
{
    title.textContent = 'Hide details'
}else {title.textContent = 'Show details'
}
}

const title = document.querySelector('#text');
title.addEventListener('click', chg);

