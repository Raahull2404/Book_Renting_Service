constconn = require('../config/db.config');
module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            defaultValue: "India"
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        }
    });
    return User;
};

/*
create table users(
  name varchar(50), 
  email varchar(50), 
  password varchar(50), 
  location varchar(100), 
  date datetime, 
  createdAt datetime, 
  updatedAt datetime, 
  id int auto_increment,
  primary key(id)
  );
*/
signUp = (data) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO user SET ?`, data, (err, res) => {
            if (!err) {
                resolve(res)
            } else {
                reject(err)
            }
        })
    })
},
    signIn = (param) => {
        return new Promise((resolve, reject) => {
            conn.query(
                `SELECT * FROM v_user WHERE email = ? or username = ? `,
                [param, param],
                (err, res) => {
                    if (!err) {
                        resolve(res)
                    } else {
                        reject(err)
                    }
                }
            )
        })
    },
    getUser = () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM v_user`, (err, rs) => {
                if (!err) {
                    resolve(rs)
                } else {
                    reject(err)
                }
            })
        })
    },
    getUserbyEmail = (param) => {
        return new Promise((resolve, reject) => {
            conn.query(
                `SELECT * FROM user WHERE email = ? or username = ?`,
                [param.username, param.username],
                (err, res) => {
                    if (!err) {
                        resolve(res)
                    } else {
                        reject(err)
                    }
                }
            )
        })
    }
