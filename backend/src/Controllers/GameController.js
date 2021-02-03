const connection = require('../database/connection');

module.exports = {
    Home(request, response) {
        response.send("Hello Word!")
    },
};