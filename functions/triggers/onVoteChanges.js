const functions = require("firebase-functions");
const { getDb } = require("../helperFunctions/db");
const db = getDb();

const updateScoreFromSnapshot = snapshot => {
  const votes = snapshot.after.val();
  const score = Object.values(votes).reduce((total, num) => total + num);

  return snapshot.after.ref.parent.child("score").set(score);
};

module.exports.onVoteCreate = functions.database
  .ref("/comments/{commentId}/votes")
  .onWrite(snapshot => {
    return updateScoreFromSnapshot(snapshot);
  });
