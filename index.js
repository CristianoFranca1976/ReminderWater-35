let interval;
let alarmTimeout;
let currentTime = 0; 

function updateClock() {
    const hours = String(Math.floor(currentTime / 60)).padStart(2, '0');
    const minutes = String(currentTime % 60).padStart(2, '0');
    document.getElementById('timerhora').innerText = `${hours}`;
    document.getElementById('timerminute').innerText = `${minutes}`;
    
    //aqui em baixo vc pode mudar o tempo do aviso aonde esta agora 00  e 01

    if (hours === '00' && minutes === '01') {
        document.getElementById('alarm').style.display = 'initial';
        document.getElementById('stopButton').style.display = 'inline';
        alarmTimeout = setTimeout(function() {
            document.getElementById('alarm');
            document.getElementById('clearButton').style.display = 'inline';
        }, 1000);
    } else {
        document.getElementById('alarm').style.display = 'none';
        document.getElementById('stopButton');
        clearTimeout(alarmTimeout);
    }

    currentTime++;
}

document.getElementById('startButton').addEventListener('click', function() {
    clearInterval(interval);
    currentTime = 0;
    updateClock();
    interval = setInterval(updateClock, 60000); 
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline';
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(interval);
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'inline';
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('alarm').style.display = 'none';
    document.getElementById('clearButton').style.display = 'none';
});

updateClock(); 



document.getElementById("a").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #7fc4ed 0%, #7fc4ed ' + value + '%, #322F40 ' + value + '%, #322F40 100%)'
  };

  document.getElementById("range2").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #7fc4ed 0%, #7fc4ed '  + value + '%, #322F40 ' + value + '%, #322F40 100%)'
  };

  document.getElementById("range1").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #7fc4ed 0%, #7fc4ed '  + value + '%, #322F40 ' + value + '%, #322F40 100%)'
  };


  function atualizarSaidas(valor) {
    
    let valorConvertido = Math.round((valor / 5000) * 100);
    document.getElementById('saida1').textContent = valorConvertido;
    document.getElementById('saida2').textContent = valor;
};  