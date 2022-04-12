const express = require("express");
const bodyParser = require("body-parser");

const InitiateMongoServer = require("./server/mongo/db");
const  Student  = require("./server/mongo/student");
InitiateMongoServer();
const app = express();
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.use(require('./server/routes/admin'));

if(process.env.NODE_ENV=="production") {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, (req, res) => {
console.log(`Server Started at PORT ${PORT}`);
});

