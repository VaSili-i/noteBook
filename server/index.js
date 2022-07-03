require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routers');
const cors = require('cors')

const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(express.json())
app.use('/', router);

function start() {
    app.listen(PORT, () => console.log(`PORT working on: ${PORT}`));
}

start()
