const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('/', (_, res) => {
	res.sendFile("index.html");
});

app.listen(PORT, () => {
	console.log(`Server started on ${PORT} port...`);
});
