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



function getTempCity(cityName , cb){
    const url = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`

    request(url, { json: true }, function (error, response, body) {
        if(error) return cb(error)
        if(body.message) return cb(body.message)
        return cb(null ,body.main.temp);
    });
}

getTempCity('Ha' , (error , temp) => {
    console.log(error || temp)
})