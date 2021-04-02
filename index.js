// let a = 0;
// handleA(value => console.log(value))

// // call back

// function handleA(callback){
//     setTimeout(() => {
//         a = 10
//         callback(a)
//     }, 1000)
// }

const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi'

request(url, function (error, response, body) {
    console.log(body);
});
