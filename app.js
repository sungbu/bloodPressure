var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var gravatar = require('gravatar');

var dbutil = require("./dao/queryBloodPerssure");
var dbutil2 = require("./dao/queryUserAll");
var bcrypt = require('bcryptjs');
var saltRounds = 10;
// console.log(dbutil)
var app = express();

var idCard = '';

//bodyParser中间件
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'src')));

app.get("/login",function (req,res) {
    res.sendFile(path.resolve(__dirname,'./src/userLogin.html'))
})
app.get("/",function (req,res) {
    res.sendFile(path.resolve(__dirname,'./src/index.html'))
})
app.post("/api/bloodPressure",urlencodedParser,function (req,res) {
    // console.log("idCard="+idCard)
    // console.log(req.body);
    dbutil.querySelectAll(idCard,req.body.year,function(data) {
        res.send(data);
    })
})
app.post("/login/siginIn",urlencodedParser,function (req,res) {
    // console.log(req.body);
    // console.log(req.body.password);
    // dbutil2.querySelectUserData(req.body.user,function (data) {
    //     res.send(data);
    // })
    if(req.body.password == undefined){
        dbutil2.querySelectUserData(req.body.user,function (data) {
            res.send(data);
        })
    }else{
        dbutil2.querySelectUserData(req.body.user,function (data) {
            // console.log(req.body.password,data)
            bcrypt.compare(req.body.password,data[0].password, function(err, result) {
                if(err) {
                    throw err
                };
                if(result){
                    //正确
                    res.send({code:1,idCard: data[0].idCard})
                }else{
                    //错误
                    res.send({code:2})
                }
            })
        })
        
    }
})
app.post("/api/postBloodPressure",urlencodedParser,function (req,res) {
    var year = new Date().getFullYear();
    dbutil.insertBloodPerssure(req.body.lowPressure,req.body.heightPressure,year,req.body.month,idCard);
})
app.post("/user/idCard",urlencodedParser,function (req,res) {
    idCard = req.body.idCard;
    // console.log(idCard)
    // dbutil2(req.body.idCard,function (data) {
    //     console.log(data);
    // });
})
app.get("/login/signUp",function (req,res) {
    res.sendFile(path.resolve(__dirname,'./src/signUp.html'))
})
app.post("/login/signUp/user",urlencodedParser,function (req,res) {
    // console.log(req.body)
    var url = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            if(err) {
                throw error
            }else{
                dbutil2.insertUser(url,req.body.user,hash,req.body.idCard);
            }
        });
    });
})
app.listen(40002,function () {
    console.log("server is run port is " + 40002);
})
