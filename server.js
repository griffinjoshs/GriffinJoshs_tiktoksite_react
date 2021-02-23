const express = require('express')
const app = express();
const cors = require('cors')
const port = 8000;


app.use(cors());

require('./server/routes/test.routes')(app);
app.listen(port, () => console.log(`Listening on port: localhost:${port}`));

