const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view egine', 'ejs');
//midlewares

//routes

app.use(require('./routes/index.js'));

//static files
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});