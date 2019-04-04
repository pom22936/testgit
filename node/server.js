const app = require('express')();
const bodyParser = require('body-parser');
require('./db');
const ProductModel = require('./product.schema');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, application/json");
  next();
});

app.get('/',(req,res)=>{
  res.end("welcome to root path");
});

app.get('/home',(req,res)=>{
  res.end("welcome to root path");
});

app.post('/api',(req,res)=>{
  const feedback = req.body.feedback;
  const username = req.body.username;

  ProductModel.create(req.body, (err,doc)=>{
    if(err){
      res.json({result: "failed"});
    }else{
      res.json({result : "succress" ,Feedback : feedback ,username : username});
    }
  })
});

app.get('/api/get', (req,res)=>{
  ProductModel.find((err,doc)=>{
    if(err)  res.json({result: "failed"});
    res.json({result: "succress" , data:doc});

  });
});

app.listen(3000, ()=>{
  console.log("server is running..");
});
