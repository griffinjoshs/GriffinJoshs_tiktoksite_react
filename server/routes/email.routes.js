const GriffinController = require('../controllers/griffin.controller')
const TestController = require('../controllers/test.controller')

module.exports = function(app) {
    app.get('/api', TestController.index);
    app.post('/api/contact/', GriffinController.newEmail);
}
