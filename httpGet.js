const https = require('https');

const httpGet = (url) => new Promise((resolve, reject) => {
    https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            resolve(JSON.parse(data));
        });

    }).on('error', (error) => {
        reject(error);
        return;
    });
});

module.exports = httpGet;


