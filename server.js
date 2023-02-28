const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Tech Blog')
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});