const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

//starts handlebars engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//stylesheets
app.use(express.static(path.join(__dirname, 'public')));


//indicating you want to use routes
app.use(routes);

//this turns on the connection to the server and db
sequelize.sync({ force: false }).then(() => { //at the bottom of the file, we use the sequelize.sync() method to establish the connection to the database
    app.listen(PORT, () => console.log(`Now listening at ${PORT}!`));
});