const Sequelize = require("sequelize");
const db = new Sequelize({
  database: "socialmediadb",
  username: "adsocialmedia",
  password: "socialpass",
  dialect: "mysql",
  host: "localhost",
});
const col_id_def = {
  type: Sequelize.DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
};
const col_username_def = {
  type: Sequelize.DataTypes.STRING(30),
  allowNull: false,
  unique: true,
};
const col_title_def = {
  type: Sequelize.DataTypes.STRING(140),
  allowNull: false,
};
const users = db.define("user", {
  id: col_id_def,
  username: col_username_def,
});
const posts = db.define("post", {
  id: col_id_def,
  title: col_title_def,
  body: {
    type: Sequelize.DataTypes.TEXT, //!tinytext-255b text-64kb mediumtext-16mb largetext-4gb
    allowNull: false,
  },
});
const comments = db.define("comment", {
  id: col_id_def,
  title: col_title_def,
  body: {
    type: Sequelize.DataTypes.TEXT({ length: "tiny" }),
  },
});
//*define relationships between databases
//!relationship between post and  comments
users.hasMany(posts);
posts.belongsTo(users);
//!relationship between users and comments
users.hasMany(comments);
comments.belongsTo(users);
//!relationship between posts and comments
posts.hasMany(comments);
comments.belongsTo(posts);
module.exports = {
  users,
  db,
  posts,
  comments,
};
