const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/griffTokDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("established connection to database");
  })
  .catch((error) => {
    console.log("were fucked", error);
  });
