const { Email } = require('../models/email.model')

module.exports = {
    newEmail: (req, res) => {
        Email.create(req.body)
        .then(email => res.json({ message: 'success', results: email}))
    .catch(err => res.json({ message: 'error', results: err }));
    }
}
