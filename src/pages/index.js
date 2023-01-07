const log = document.querySelector('#log');
const domain = document.querySelector('#domain');
const port = document.querySelector('#port');
const topic = document.querySelector('#topic');
const metric = document.querySelector('#metric');

let client;

const connect = () => {
	client = mqtt.connect(`ws://${domain.value}:${port.value}`);
	client.on('message', function (topic, message) {
		// message is Buffer
		log.innerHTML = `${new Date()}: ${message.toString()}\n${log.innerHTML}`;
	});
};
const pub = () => {
	client.publish(topic.value, metric.value);
};
const sub = () => {
	client.subscribe(topic.value);
};
const end = () => {
	client.end();
};

const connectButton = document.querySelector('#connect').addEventListener('click', connect);
const subButton = document.querySelector('#sub').addEventListener('click', sub);
const pubButton = document.querySelector('#pub').addEventListener('click', pub);
const endButton = document.querySelector('#end').addEventListener('click', end);
