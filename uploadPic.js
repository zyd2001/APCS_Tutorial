#!/usr/local/bin/node

var request = require('/usr/local/lib/node_modules/request');
var fs = require('fs');
var readline = require('readline');

var list = [];
if (process.argv[2] == 'watch')
{
    var processed = [];
    var csv = fs.createReadStream('Captures/list.csv');
    var rl = readline.createInterface({input: csv, crlfDelay: Infinity});
    rl.on('line', (line) => {
        list.push(line.split(',')[0]);
    });
    rl.on('close', () => {
        fs.watch('Captures', (event, filename) => {
            if (filename && event == 'change' && list.indexOf(filename) == -1 && processed.indexOf(filename) == -1)
            {
                setTimeout(() => {
                    processed.push(filename);
                    request.post({
                        url: "https://sm.ms/api/upload",
                        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0'},
                        formData: {smfile: fs.createReadStream('Captures/' + filename)},
                    }, (err, httpResponse, body, filename) => {
                        if (err)
                            console.log(body);
                        else
                        {
                            var res = JSON.parse(body);
                            if (res.code == 'error')
                                console.error(res.msg);
                            else 
                            {
                                list.push(filename);
                                console.log(res);
                                console.log('upload ' + filename + ' success!\n' + 'url: ' + res.data.url);
                                fs.appendFileSync('Captures/list.csv', '\n' + filename + ',' + res.data.url);
                            }
                        }
                    });
                }, 1000);
            }
        });
    });
}
else
{
    var csv = fs.createReadStream('Captures/list.csv');
    fs.readdir('Captures', (err, files) => {
        var rl = readline.createInterface({input: csv, crlfDelay: Infinity});
        rl.on('line', (line) => {
            list.push(line.split(',')[0]);
        });
        rl.on('close', () => {
            var appendContent = [];
            for (file of files)
            {
                if (list.indexOf(file) == -1 && file.substring(file.lastIndexOf('.')) != '.csv')
                {
                    console.log('request ' + file);
                    request.post({
                            url: "https://sm.ms/api/upload",
                            headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0'},
                            formData: {smfile: fs.createReadStream('Captures/' + file)},
                        }, (err, httpResponse, body, file) => {
                            if (err)
                                console.log('err');
                            else
                            {
                                var res = JSON.parse(body);
                                if (res.code == 'error')
                                    console.error(res.msg);
                                else
                                {
                                    console.log(file);
                                    fs.appendFileSync('Captures/list.csv', '\n' + file + ',' + res.data.url);
                                }
                            }
                    });
                }
            }      
        });
    });
}