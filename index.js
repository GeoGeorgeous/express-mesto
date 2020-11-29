const express = require('express');
const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(__dirname + '/public')); // static


app.get('/', (req, res) => {
  
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

