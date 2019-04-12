const app = require('express')();
const bodyParser = require('body-parser');
require('./db');
const ProductModel = require('./product.schema');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, application/json");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});


app.post('/api',(req,res)=>{
  const isbn = req.body.isbn;
  const title = req.body.title;
  const price = req.body.price

  ProductModel.create(req.body, (err,doc)=>{
    if(err){
      res.json({result: "failed"});
    }else{
      res.json({result : "succress",isbn : isbn,title: title,price: price});
    }
  })
});

app.get('/api/get', (req,res)=>{
  ProductModel.find((err,doc)=>{
    if(err)  res.json({result: "failed"});
    res.json({result: "succress" , data:doc});

  });
});

app.get('/api/get/:id',(req,res)=>{
  var id = req.params.id;
  ProductModel.findById(id,(err,doc)=>{
    if(err) res.json({result: "failed"});

    res.json({result: "succress" , data:doc});
  });
});

app.put('/api/update/:id',(req,res)=>{
  var id = req.params.id;
  const isbn = req.body.isbn;
  const title = req.body.title;
  const price = req.body.price
  ProductModel.findByIdAndUpdate(id,req.body,(err,doc)=>{
    if(err){
      res.json({result: "failed"});
    }else{
      res.json({result : "succress" ,isbn : isbn,title: title,price: price});
    }
  });
});

app.delete('/api/del/:id',(req,res)=>{
  var id = req.params.id;
  ProductModel.findByIdAndDelete(id,(err,doc)=>{
    if(err) res.json({result: "failed"});

    res.json({result: "delete succress" , data:doc});
  });
});

app.listen(3000, ()=>{
  console.log("server is running..");
});
