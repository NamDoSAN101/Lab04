const player = 'x'
const com = 'o'
var comRan = 0
const data = ["","","","","","","","",""]
const random = () =>  comRan = Math.floor(Math.random() * 9) + 1 ;



for(let i = 1 ;i<10;i++){
const boxPlayer = document.getElementById(i);

boxPlayer.addEventListener('click', () => {
    alert(i)
    boxPlayer.innerText = player
data[i-1] = player;

if(data.indexOf("") > -1){
do{
    random();
}while(
 data[comRan-1] !== ""
)
const boxCom = document.getElementById(comRan);
boxCom.innerText = com ;
data[comRan-1] = com 
}
alert(data);
}

);
}


