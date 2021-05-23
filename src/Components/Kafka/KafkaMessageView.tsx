import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import SockJsClient from "react-stomp";
const SOCKET_URL = "http://52.9.183.130:9092";
const TOPIC_NAME = "test_topic";
const KafkaMessageView = () => {
  const [kafkaMessageText, setKafkaMessageText] = useState("");
  const [requestReadMessage, setRequestReadMessage] = useState(false);
  const [readKafkaMessage, setReadKafkaMessage] = useState("");
  const getKafkaMessage = () => {
    setRequestReadMessage(true);
  };
  const sendKafkaMessage = () => {
    fetch("/service/post_to_topic.py");
    return true;
  };
  return (
    <div className="container">
      <Form>
        <Form.Group>
          <Form.Label>Enter Kafka Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Kafka Message"
            onChange={(event) => setKafkaMessageText(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Typed message</Form.Label>
          <Form.Control
            readOnly
            value={kafkaMessageText}
            type="text"
            placeholder="Entered kafka message"
          />
        </Form.Group>
        <div className="container row">
          <Button onClick={getKafkaMessage}>Get Message</Button>
          <div className="ml-2"></div>
          <Button onClick={sendKafkaMessage}>Send Message</Button>
        </div>
      </Form>
      {requestReadMessage && (
        <SockJsClient
          url={SOCKET_URL}
          topics={["topic/" + TOPIC_NAME]}
          onMessage={(message: any) => {
            setReadKafkaMessage(message);
            if (message) {
              setRequestReadMessage(false);
            }
          }}
        />
      )}
    </div>
  );
};

export default KafkaMessageView;
