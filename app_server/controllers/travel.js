//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    //pageTitle = process.env.npm_package_description + ' - Travel';
    pageTitle = 'Kathryn McNeil - Travel';
    res.render('travel', {title : pageTitle, trips});
};

module.exports = {
    travel
};