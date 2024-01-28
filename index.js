const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <your-mongo-connection-string> to reflect your cluster. You can find it on the
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */

  const uri = "mongodb+srv://ssuish:KcIEjoYUBynY2SVR@nodejs-cluster0.vpkfdv8.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Connected successfully. Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

main().catch(console.error);
