const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    conn.write("Name: VWV");
  });


  // setInterval(fn = () => {
  //   conn.write("Move: up");
  // }, 50);

  process.stdin.on('connect', (userMessage) => {
    conn.write(userMessage, '\n');
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  
  return conn;
};


module.exports = {
  connect
};