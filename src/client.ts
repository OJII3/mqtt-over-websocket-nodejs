import { connect } from 'mqtt';

const Client = {
	// MQTTブローカーの設定
	client: connect({
		host: 'localhost',
		port: 1883,
	}),

	host() {
		// MQTTブローカーへ接続成功時
		this.client.on('connect', function () {
			console.log('subscriber.connected.');
		});

		// subscribe設定
		var topic_test = 'test/topic';
		this.client.subscribe(topic_test);

		// MQTTブローカーからメッセージを受信した際
		this.client.on('message', (topic, message) => {
			console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
		});
	},
};

export default Client;
