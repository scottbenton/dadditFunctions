const functions = require("firebase-functions");
const { getDb } = require("../helperFunctions/db");
const db = getDb();

const DEFAULT_USER_OPTIONS = {
  comments: {},
  posts: {},
  adminOf: {},
  subscriptions: {}
};

module.exports.onUserCreate = functions.auth.user().onCreate(user => {
  try {
    return userRef.update(DEFAULT_USER_OPTIONS);
  } catch (error) {
    return error;
  }
});
