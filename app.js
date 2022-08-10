const express = require('express');
const app = express();
const process = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello chitters.');
});

const port = process || 3000;
app.listen(port, () =>
	console.log(`Server is running on http://localhost:${port}`)
);
