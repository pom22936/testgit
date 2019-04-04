const app = require('express')();

app.get('/',(req,res)=>{
  res.end("welcome to root path");
});

app.get('/home',(req,res)=>{
  res.end("welcome to root path");
});

app.post('/api',(req,res)=>{
  res.end("welcome to root path");
});

app.listen(3000, ()=>{
  console.log("server is running..");
});
