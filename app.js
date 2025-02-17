const path = require('path');
const fs = require('fs'); // fs module - load the JSON file and pass the data to EJS templates

const express = require('express');  // Express web framework. It simplifies handling HTTP requests and managing routing.
// Create an Express Application
const app = express(); 
const port = process.env.PORT || 4000;
// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.use(express.static('public'));
// Middleware
app.use((req, res, next) => {
    const nav_data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data_json', 'nav.json')));
    const projects_data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data_json','projects.json')));

    // Pass the data to view
    res.locals.nav_data = nav_data;
    res.locals.projects_data = projects_data;

    next(); // Proceed to the next middleware or route handler
});

app.get('/', (req, res) => {
    res.render('index');
});

// Server setup 
app.listen(port, function (req, res) { 
	console.log(`Example app listening on port ${port}`)
});