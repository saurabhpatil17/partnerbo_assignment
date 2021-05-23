from kafka import KafkaProducer, KafkaConsumer
import json

def post_msg():
	try:
		producer = KafkaProducer(bootstrap_servers='52.9.183.130:9092', value_serializer=lambda v: json.dumps(v).encode('utf-8'))
		for x in range(1, 10):
			msg = {"key": "Random", "value":x}
			producer.send("test_topic", key="test_topic", value=str(msg))
			producer.flush()
	except Exception as e:
		print("Following error occured while sending data:\n%s"%e)

def get_msg():
	try:
		consumer = KafkaConsumer('test_topic',bootstrap_servers='52.9.183.130:9092')
		for msg in consumer:
			print (msg)
	except Exception as e:
		print("Following error occured while fetching data:\n%s"%e)	

post_msg()


