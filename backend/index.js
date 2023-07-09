const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8080;

app.get('/:num', (req, res) => {
    if (req.params.num % 2 === 0) {
        setTimeout(() => {
            res.send(`${req.params.num} is Even`);
        }, 2000);
    } else {
        setTimeout(() => {
            res.send(`${req.params.num} is Odd`);
        }, 1000);
    }
});

app.listen(port, () => {
    console.log('APP STARTED');
})