const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

const port = 8080;

const Quagga = require('quagga').default;

app.use(express.static("public"));
app.set("src", "path/to/views");

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`)
})

app.get('/code/:code',async(req,res)=>{
   let code = req.params.code;
  res.send(code)
})

    app.listen(port, () => {
      console.log(`Sunucu ${port} portunda çalıştırılıyor`);
    });
