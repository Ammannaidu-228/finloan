const express = require('express');
const connectToDB = require('./utils/dbConnection');
const services = require('./routes/serviceRoutes')
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).send({message: "This is Finalon Backend Server"})
})

app.use('/service', services)

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
    connectToDB();
});