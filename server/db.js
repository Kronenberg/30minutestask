const config = require("./config");
const mysql  = require("mysql");

const connection = mysql.createConnection(config.mysql);
// i spent all the time for client but here i will use some module like this https://www.npmjs.com/package/promise-mysql
// to make life more ease

connection.connect();

export default class Database {
  static load(user, pass) {
    return Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE user="' + user + '" AND password="' + pass + '"', function (error, results) {
        if (error) reject(error);
        resolve(results[0]);
      });

      connection.end();
    })
  }
}