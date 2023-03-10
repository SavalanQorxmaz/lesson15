const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
// const { url } = require("inspector");
// const { urlencoded } = require("express");
const port = 7000


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))


const db = [];



app.get("/", (req, res)=>{
    res.send({     
        data: db
    })
})

app.post("/", (req, res) =>{
    db.push(req.body);
    console.log(req.body)

})


app.put("/:id", (req, res) => {
    // console.log(req.params)
    const id = req.params.id;
    let index = -1;
db.map((value, ind) => {
    if(value.id == id){
        index = ind;
    }
})
db[index] = req.body

})

app.delete("/:id", (req, res) => {
    const id= req.params.id;
    let index = -1
    db.map((value, ind) => {
        if(value.id == id){
            index = ind
        }
    })
    db.splice(index, 1)

})



app.listen(port)