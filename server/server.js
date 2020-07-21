import express from 'express';
import path from 'path';
import serverRenderer from './middleware/renderer';

const app = express();

const PORT = 5000;

// initialize the application and create the routes

// root (/) should always serve our server rendered page
app.use('^/$', serverRenderer);

// other static resources should just be served as they are
app.use(
	express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d'})
);

// app.get('/*', (req, res) => {
// 	const context = {};
// 	const app = ReactDOMServer.renderToString(
// 		<StaticRouter location={req.url} context={context}>
// 			<App />
// 		</StaticRouter>
// 	);

// 	const indexFile = path.resolve('./build/index.html');
// 	fs.readFile(indexFile, 'utf8', (err, data) => {
// 		if (err) {
// 			console.error('Something went wrong:', err);
// 			return res.status(500).send('Oops, better luck next time!');
// 		}

// 		return res.send(
// 			data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
// 		);
// 	});
// });

app.listen(PORT, '0.0.0.0', (error) => {
	if (error) {
		return console.log('something bad happened', error);
	}
	console.log(`😎 Server is listening on port ${PORT}`);
});
