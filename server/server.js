import express from 'express';
import path from 'path';
import serverRenderer from './middleware/renderer';

const app = express();

const PORT = process.env.PORT || 8080;

// initialize the application and create the routes

// root (/) should always serve our server rendered page
app.use('^/$', serverRenderer);

// other static resources should just be served as they are
app.use(
	express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d'})
);

app.listen(PORT, (error) => {
	if (error) {
		return console.log('something bad happened', error);
	}
	console.log(`😎 Server is listening on port ${PORT}`);
});

module.exports = app;
