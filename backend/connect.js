const mysql= require("mysql2")

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'11111111',
    database:'social'
})

exports.db=db