const connect = require("./client");
const { setupInput } = require("./input");
let cnn = connect();
setupInput(cnn);
