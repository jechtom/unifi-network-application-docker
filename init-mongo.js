console.log("Running init-mongo.js");

var dbName = process.env.MONGO_DBNAME;
var dbUser = process.env.MONGO_USER;
var dbPassword = process.env.MONGO_PASS;

console.log("MONGO_DBNAME: " + dbName);
console.log("MONGO_USER: " + dbUser);

db.getSiblingDB(dbName).createUser({user: dbUser, pwd: dbPassword, roles: [{role: "dbOwner", db: dbName}]});
db.getSiblingDB(dbName + "_stat").createUser({user: dbUser, pwd: dbPassword, roles: [{role: "dbOwner", db: dbName + "_stat"}]});
