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
  // your code here\

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

  // console.log(key);
  //if(key === '\u00057' || key === '\u00077')
  if (key === "\u0003") {
    process.exit();
  }
};

//\u0057 W U+0077
setupInput();
module.exports = { setupInput };


