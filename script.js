
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector("#place").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = data.main.temp;
    document.querySelector('#humid').innerHTML = data.main.humidity;
    document.querySelector("#speed").innerHTML = data.wind.speed;
    
}  

// const apiKey = "8a6f074716670ebe32ffa16035ef9cf3"
//         const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=ahmedabad"

//         async function checkWeather(){
//             const response = await fetch(apiUrl + `&appid=${apiKey}`);
//             var data = await response.json();
//             console.log(data);

//             document.querySelector('#humid').innerHTML = data.main.humidity;
//             document.querySelector("#speed").innerHTML = data.wind.speed;
//             document.querySelector("#place").innerHTML = data.name;
//             document.querySelector("#temperature").innerHTML = data.main.temp;    
            

//         }  
//         checkWeather();  

function get_temp(){
    const apiKey = "8a6f074716670ebe32ffa16035ef9cf3"
    const place = document.querySelector('.input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}`

    async function checkWeather(){
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
    
        document.querySelector("#place").innerHTML = data.name;
        document.querySelector("#temperature").innerHTML = data.main.temp;
        document.querySelector('#humid').innerHTML = data.main.humidity;
        document.querySelector("#speed").innerHTML = data.wind.speed;
        
    }
    checkWeather()
}


const inputTask = document.querySelector('.input');
inputTask.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        get_temp();
    }
})

const toggle_switch =  document.querySelector('.checkbox');
const box = document.querySelector('.container');
toggle_switch.addEventListener('change',function(){
    if(this.checked){
        document.body.style.backgroundColor = '#f4ece8';
        box.style.backgroundColor = '#2b2b2e'
        // box.style.color = 'black'
    }
    else{
        document.body.style.backgroundColor = '';
        box.style.backgroundColor = ''
        box.style.color= ''

    }
    
})