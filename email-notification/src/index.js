const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "email-notification",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "email-notification" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "invoice-app", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`[Email notification]`, {
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
console.log("[Email notification started]");
