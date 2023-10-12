const celciusText = document.getElementById('text-celcius')
const celciusInput = document.getElementById('input-celcius')
const fahrenheitText = document.getElementById('text-fahrenheit')
const fahrenheitInput = document.getElementById('display-fahrenheit')

function convert() {
    celcius = document.getElementById('input-celcius').value;
    fahrenheit = document.getElementById('input-celcius').value * 9 / 5 + 32;
    document.getElementById('display-fahrenheit').value = Math.round(fahrenheit);
    document.getElementById('display-calculation').value = celcius +"°C x (9/5) + 32 = " + Math.round(fahrenheit) +"°F";
}

function reset() {
    document.getElementById("input-celcius").value = '';
    document.getElementById("display-fahrenheit").value = '';
    document.getElementById("display-calculation").value = '';
    celciusText.innerHTML = "Celcius"
    fahrenheitText.innerHTML = "Fahrenheit"
}

function reverse() {
    celciusText.innerHTML = "Fahrenheit"
    fahrenheitText.innerHTML = "Celcius"
    celciusInput.innerHTML = "display-fahrenheit"
    fahrenheitInput.innerHTML = "input-celcius"
    fahrenheit = document.getElementById('input-celcius').value;
    celcius = (document.getElementById('input-celcius').value - 32) * 5/9;
    document.getElementById('display-fahrenheit').value = Math.round(celcius);
    document.getElementById('display-calculation').value = "(" + fahrenheit +"°F - 32 x (5/9) = " + Math.round(celcius) +"°C";
}