'use strict'

// recommended to inject access tokens as environmental variables, e.g.
// const token = process.env.FB_PAGE_ACCESS_TOKEN
const token = "EAAGWH5Hh7IMBAB2xI3a9D9d8PGNzFSzZAQnN72Na3e7X2u5L8X1zkJKnI1kP9fi1FscHquxVfVbgypXRmygFUIAbAnAt55GoLckUYaP8ZAhV6LZC93TfwNNnCKJ6AhbZBdkpN0B14SJyXUdXSRT9jFeg2RSpAVKF8uqy9ZCd9YQZDZD"
const verify_token = 'boing';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


