require('dotenv').config();

const config = {
  KafkaHost:process.env.KAFKA_HOST,
  KafkaTopic: process.env.KAFKA_TOPIC
};

const obj = {
  "a":"b"
};
module.exports = {
  config: config,
  obj:obj
};