const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js App deployed via CodeBuild & ECS!. Now I am modifying my code');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
