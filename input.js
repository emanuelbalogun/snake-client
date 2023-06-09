const { MOVEKEY } = require('./constants');
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  stdin.on("keypress", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  
  switch (key) {
  case MOVEKEY.MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case MOVEKEY.MOVE_KEY_LEFT:
    connection.write("Move: left");
    break;
  case MOVEKEY.MOVE_KEY_DOWN:
    connection.write("Move: down");
    break;
  case MOVEKEY.MOVE_KEY_RIGHT:
    connection.write("Move: right");
    break;
  case "t":
    connection.write("Say: good");
    break;
  case "u":
    connection.write("Say: I won");
    break;
  }
  
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };


