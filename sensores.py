import paho.mqtt.client as mqttClient
import json
from pymongo import MongoClient
from bson import ObjectId

# Conexión a la base de datos en la nube (MongoDB Atlas)
cloud_uri = "" #aqui va nuestra cadena de conexion
cloud_client = MongoClient(cloud_uri)
cloud_db = cloud_client["farmacia"]
cloud_collection = cloud_db["valores"]

# Conexión a la base de datos local (MongoDB Compass)
local_uri = "mongodb://localhost:27017"
local_client = MongoClient(local_uri)
local_db = local_client["farmacia"]
local_collection = local_db["valores"]

# Función de serialización JSON personalizada
def json_serializable(obj):
    if isinstance(obj, ObjectId):
        return str(obj)
    raise TypeError(f"Type {type(obj)} not serializable")

# Función para almacenar el JSON en MongoDB Atlas
def save_to_mongodb(json_data):
    parsed_data = json.loads(json_data)
    cloud_collection.insert_one(parsed_data)
    print("JSON data saved to MongoDB Atlas")

# Función para almacenar el JSON en MongoDB Compass
def save_to_mongodb_compass(json_data):
    parsed_data = json.loads(json_data)
    local_collection.insert_one(parsed_data)
    print("JSON data saved to MongoDB Compass")

topicl = "/sensores"

def on_connect(client, userdata, flags, rc):
    print("Connected code: " + str(rc))
    client.subscribe(topicl)

def on_message(client, userdata, message):
    json_data = str(message.payload.decode("utf-8"))

    intopic = str(message.topic)
    print("Topic: %s , message: %s" % (intopic, json_data))
    try:
        if json_data != '':
            print("Recibido: %s" % json_data)

            # Almacenar en MongoDB Atlas
            save_to_mongodb(json_data)

            # Almacenar en MongoDB Compass
            save_to_mongodb_compass(json_data)
    except Exception:
        print("JSON parsing ERROR...")

client = mqttClient.Client()
broker = "broker.hivemq.com"
port = 1883

try:
    client.connect(broker, port, 60)
except Exception:
    print("Error MQTT connect")

print("MQTT subscriber started...")
client.on_connect = on_connect
client.on_message = on_message
client.loop_forever()
