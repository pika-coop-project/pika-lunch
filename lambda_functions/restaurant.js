const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'Cluster0';

let cachedDb = null;

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(DB_NAME);

  return cachedDb;
};

const queryDatabase = async (db) => {
  const restaurant = await db.collection("restaurant").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  };
};

const pushToDatabase = async (db, data) => {
    const restaurantData = {
      name: data.name,
      address: data.address,
    };
  
    if (restaurantData.name && restaurantData.address) {
      await db.collection("restaurant").insertMany([data]);
      return { statusCode: 201 };
    } else {
      return { statusCode: 422 };
    }
};

const updateDatabase = async (db, data) => {
  const restaurantData = {
    name: data.name,
    address: data.address,
  };

  if (restaurantData.name && restaurantData.address) {
    const result = await db.collection("restaurant")
      .updateOne({ name: restaurantData.name, address: restaurantData.address }, { $set: { "went": true } });
    console.log(`${result.matchedCount} document(s) matched the update query criteria`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);
    return { statusCode: 200 };
  } else {
    return { statusCode: 404 };
  }
};

const deleteFromDatabase = async (db, data) => {
  const restaurantData = {
    name: data.name
  };

  if (restaurantData.name) {
    await db.collection("restaurant").deleteOne({"name": restaurantData.name});
    return { statusCode: 200 };
  } else {
    return { statusCode: 404 };
  }
};

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);
  
  switch (event.httpMethod) {
    case "GET":
      return queryDatabase(db);
    case "POST":
      return pushToDatabase(db, JSON.parse(event.body));
    case "PATCH":
      return updateDatabase(db, JSON.parse(event.body));
    case "DELETE":
      return deleteFromDatabase(db, JSON.parse(event.body));
    default:
      return { statusCode: 400 };
  }
};