var mysql = require("mysql");

function createConnection () {
    var connection = mysql.createConnection({
        host: "106.13.111.39",
        port: "3306",
        user: "bloodPressure",
        password: "bloodPressure20010623",
        database: "bloodPressure"
    })
    return connection
}
function querySelectAll (idcard,success) {
    var querySql = "select * from user where idCard = ?;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[idcard],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
function querySelectUserData (user,success) {
    var querySql = "select * from user where user = ?;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[user],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
function insertUser (headPic,user,password,idCard) {
    // console.log(day)
    var querySql = "insert into user(`headPic`,`user`,`password`,`idCard`) values (?,?,?,?);";
    var connection = createConnection();
    connection.connect();
    connection.query(querySql,[headPic,user,password,idCard],function (error,result) {
        if(error){
            console.log(error);
        }else{
            console.log("success");
        }
    });
    connection.end();
}
module.exports = {
    querySelectAll: querySelectAll,
    querySelectUserData: querySelectUserData,
    insertUser: insertUser
};