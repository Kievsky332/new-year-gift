function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(a);
}
function myCode(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeHHMM = `${hours}:${minutes}`;
    const myP = document.getElementById('time');
    //myP.value = timeHHMM;
}
const intervalId = setInterval(myCode, 1000);

let a = ["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3","6.mp3","7.mp3","8.mp3","9.mp3","10.mp3","11.mp3","12.mp3","13.mp3","14.mp3","15.mp3","16.mp3"];
shuffle(a);
let b = 0;
function bam(){
    let time = document.getElementById('time').value;
    let trek = document.getElementById('trek');
    var audio = new Audio(a[b]);
    audio.addEventListener('loadedmetadata', function() {
        function vol()
        {
            volume = document.getElementById('amount').value;
            audio.volume = volume/100;
        }
        setInterval(vol,1);
        console.log(a[b] + " длится " + audio.duration + " секунд.");
        trek.innerHTML = "Текущий трек: "+a[b]+ " длится " + audio.duration + " секунд."
        audio.play();
        setInterval(upyat, audio.duration * 1000);
    });
    function upyat() {
       
        audio.pause();      
        audio.currentTime = 0;  
        audio.src = a[b];   
        audio.play(); 
        b += 1;       
        if (b==16){
            b=0;
        }
    }
}
function ng(){
    let time = document.getElementById('time').value;

    if (time =="23:58"){
        document.location.href = 'gift.html'
    }
}
setInterval(ng,1000)

