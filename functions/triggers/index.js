const { onUserCreate } = require("./onUserCreate");
const { onVoteCreate, onVoteChange } = require("./onVoteChanges");

module.exports = {
  onUserCreate,
  onVoteCreate,
  onVoteChange
};
