import aedes from 'aedes';
import { createServer } from 'aedes-server-factory';

/** MQTT BROKER SERVER 1883 */
const Broker = {
	app: new aedes(),
	port: 1883,

	init() {
		const server = createServer(this.app, { ws: true });

		server.listen(this.port, () => {
			console.log(`server listening on port ${this.port}`);
		});

		this.app.on('clientError', (client, error) => {
			console.error('client error', client.id);
			console.error(error);
		});

		this.app.on('connectionError', (client, error) => {
			console.error('connection error', client.id);
			console.error(error);
		});

		this.app.on('publish', (packet, client) => {
			console.log('publish', client);
		});

		this.app.on('subscribe', (subscriptions, client) => {
			console.log('subscribe', client.id);
		});

		this.app.on('unsubscribe', (unsubscriptions, client) => {
			console.log('unsubscribe', client.id);
		});

		this.app.on('client', (client) => {
			console.log('client', client.id);
		});

		this.app.on('clientDisconnect', (client) => {
			console.log('clientDisconnect', client.id);
		});
	},
};

export default Broker;
