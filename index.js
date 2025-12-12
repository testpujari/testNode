const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hii this is a node project ');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});