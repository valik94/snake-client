const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("my snake is connected");
    conn.write('Name: Val')
    // code that does something when the connection is first established

  return conn;
});
}

module.exports = {connect}