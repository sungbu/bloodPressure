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
function querySelectAll (idCard,year,success) {
    var querySql = "select * from bloodPressure where idCard = ? and year = ?";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[idCard,year],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
function insertBloodPerssure (lowPressure,heightPressure,year,month,idCard) {
    // console.log(day)
    var querySql = "insert into bloodPressure(`lowPressure`,`heightPressure`,`year`,`month`,`idCard`) values (?,?,?,?,?);";
    var connection = createConnection();
    connection.connect();
    connection.query(querySql,[lowPressure,heightPressure,year,month,idCard],function (error,result) {
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
    insertBloodPerssure: insertBloodPerssure
}