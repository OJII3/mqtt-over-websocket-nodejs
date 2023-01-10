import express from 'express';
import { createServer } from 'http';

const port = 3031;
const app = express();

/** HTTPサーバー */
const HttpServer = {
	server: createServer(app),

	init() {
		app.use(express.static('src/pages'));

		this.server.listen(port, () => {
			console.log(`http server listening at http://localhost:${port}`);
		});
	},
};

export default HttpServer;
