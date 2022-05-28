
const mongodb = require('mongodb');

const url = "mongodb://admin:fullstack@localhost:27017";
const client = new mongodb.MongoClient(url, { useUnifiedTopology: true });

async function main() {
  await client.connect();
  const db = client.db("compras");
  let Id_Tomas = ObjectId("5c9ccc140aee604c4ab6cd06")
  let Id_Antonio = ObjectId("5c9ccc140aee604c4ab6cd08")
  const result = await db.collection("personas").insertMany([
    { "_id": Id_Tomas, "name": "Tomas", "surnames": "Navas", "age": 23, "mail": "tomas_defaul_@gmail.com" },
    { "_id": Id_Antonio, "name": "Antornio", "surnames": "Lopez", "age": 26, "mail": "antonio_default_@gmail.com" },

  ]);
  const result_2 = await db.collection("listas").insertMany([
    { "idFrom": Id_Tomas, "lista": [{ "name": "Apple", "quantity": 10 }], "ts_creation": Date.now() },
    { "idFrom": Id_Antonio, "lista": [{ "name": "Mela", "quantity": 10 }], "ts_creation": Date.now() },
  ]);

  console.log("The database was started without any problems.");
  client.close();
}

main();
