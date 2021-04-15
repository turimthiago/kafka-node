const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "invoice-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: "invoice-app",
    messages: [{ value: "Testando" }],
  });
};

run().catch(console.error);
