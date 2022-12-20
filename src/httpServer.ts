import express from 'express';
import { createServer } from 'http';

const port = 3000;
const app = express();

const HttpServer = {
	server: createServer(app),

	init() {
		app.get('/', (_, res) => {
			console.log('get /');
			res.sendFile(`${__dirname}/pages/mqtt.html`);
		});

		this.server.listen(port, () => {
			console.log(`http server listening at http://localhost:${port}`);
		});
	},
};
export default HttpServer;
