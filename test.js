#!/usr/local/bin/node

var request = require('/usr/local/lib/node_modules/request');
var fs = require('fs');
var http = require('http');

// request.post({
//     url: "https://sm.ms/api/upload",
//     headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0'},
//     formData: {smfile: fs.createReadStream('Captures/' + '10.PNG')},
// }, (err, httpResponse, body, file) => {
//     if (err)
//         console.log('err');
//     else
//     {
//         var res = JSON.parse(body);
//         if (res.code == 'error')
//             console.error(res.msg);
//         else
//         {
//             console.log(file);
//             console.log(res.data);
//         }
//     }
// });

http.request({ 
    hostname: 'sm.ms', 
    port: 443, 
    path: '/api/upload', 
    method: 'GET' 
}, (res) => {console.log(res)})