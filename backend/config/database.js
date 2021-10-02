const { DB_USERNAME,DB_PASSWORD,DB_CLUSTER } = require("./config");

module.exports = {
  MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.lbmt4.mongodb.net/ZooManagementSystem?retryWrites=true&w=majority`
};
