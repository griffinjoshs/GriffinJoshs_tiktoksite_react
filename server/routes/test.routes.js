const TestController = require('../controllers/test.controller')

module.exports = function(app) {
    app.get('/api', TestController.index);
}