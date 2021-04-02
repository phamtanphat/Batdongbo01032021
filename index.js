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



// function getTempCity(cityName , cb){
//     const url = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`

//     request(url, { json: true }, function (error, response, body) {
//         if(error) return cb(error)
//         if(body.message) return cb(body.message)
//         return cb(null ,body.main.temp);
//     });
// }

// getTempCity('Ha' , (error , temp) => {
//     console.log(error || temp)
// })

2 + 3 - 5

function cong(a , b , cb) {
    const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`

    request(url, { json: true }, function (error, response, body) {
        if (error) return cb(error)
        return !body.success ? cb(body.message) : cb(null , body.message);
    });
}
function tru(a, b, cb) {
    const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`

    request(url, { json: true }, function (error, response, body) {
        if (error) return cb(error)
        return !body.success ? cb(body.message) : cb(null, body.message);
    });
}

function nhan(a, b, cb) {
    const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`

    request(url, { json: true }, function (error, response, body) {
        if (error) return cb(error)
        return !body.success ? cb(body.message) : cb(null, body.message);
    });
}

function chia(a, b, cb) {
    const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`

    request(url, { json: true }, function (error, response, body) {
        if (error) return cb(error)
        return !body.success ? cb(body.message) : cb(null, body.message);
    });
}

tru(1 , 2 , (error , tong) => console.log(error || tong))