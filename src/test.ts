import { MqttClient } from './mqttClient';
import HttpServer from './httpServer';
import { BrokerWS } from './broker-ws';
import { BrokerMQ } from './broker-mq';

// BrokerMQ.init();
BrokerWS.init();
MqttClient.host();
HttpServer.init();
