const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const path = require('path')
const port = 8000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
// app.use(express.static('client/build'));

require('./server/config/mongoose.config')
require('./server/routes/email.routes')(app);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`));

