const db=require("../config/db")

const User = {
  create: (username, email, password, callback) => {
    db.query(
      "INSERT INTO admin (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
      callback
    );
  },

  findByEmail: (email, callback) => {
    db.query("SELECT * FROM admin WHERE email = ?", [email], callback);
  }
};

module.exports = User;
