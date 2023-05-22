const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host:"172.19.168.205", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect",()=> {
    console.log("Successfully connected to game server");
    conn.write("Name:BAE");
  });

  conn.on("data",(data) => {
    console.log(data);

  });
  return conn;
};

module.exports = connect;
