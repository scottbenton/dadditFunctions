const admin = require("firebase-admin");

let db;

function initDb() {
  admin.initializeApp();
  db = admin.database();
  return db;
}

module.exports.getDb = function() {
  if (!db) {
    return initDb();
  } else {
    return db;
  }
};
