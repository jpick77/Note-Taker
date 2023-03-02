const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


const apiRoute = require('./Develop/routes/Apiroutes');
const htmlRoute = require('./Develop/routes/Htmlroutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use(express.static('./Develop/public'));


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);