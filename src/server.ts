import express from "express";
import { connect } from "mqtt";

const [httpPort, mqttPort] = [8080, 1883];
const mqttBrokerUrl = `mqtt://localhost:${mqttPort}`;
const app = express();

// Create MQTT client, connect to broker and start http server
const client = connect(mqttBrokerUrl);
app.listen(httpPort, () => {
  console.log("Listening on port", httpPort);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  client.publish("test", "Hello from Express");
});

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

client.on("message", (topic, message) => {
  console.log("Received message", topic, message.toString());
});
