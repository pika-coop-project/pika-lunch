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
    rating: data.rating,
    numRatings: data.numRatings,
    upvotes: data.upvotes,
    downvotes: data.downvotes
  };

  console.log(" typeof rating", typeof restaurantData.rating);
  console.log("numRatings", typeof restaurantData.numRatings);
  
  console.log(" typeof upvotes", typeof restaurantData.upvotes);
  console.log("typeof downvotes", typeof restaurantData.downvotes);

  if (restaurantData.name && restaurantData.rating && restaurantData.numRatings) {
    const result = await db.collection("restaurant")
      .updateOne({ name: restaurantData.name }, { $set: { "rating": restaurantData.rating, "num_ratings": restaurantData.numRatings } });
    return { statusCode: 101 };
  } else if (restaurantData.name && (restaurantData.upvotes || restaurantData.upvotes === 0) && (restaurantData.downvotes || restaurantData.downvotes === 0)) {
    const result = await db.collection("restaurant")
      .updateOne({ name: restaurantData.name }, { $set: { "upvotes": restaurantData.upvotes, "downvotes": restaurantData.downvotes } });
    return { statusCode: 102 };
  } else if (restaurantData.name) {
    const result = await db.collection("restaurant")
      .updateOne({ name: restaurantData.name }, { $set: { "went": true } });
    return { statusCode: 103 };
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