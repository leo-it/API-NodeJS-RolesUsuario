import mongoose from 'mongoose'
let USER = "leo",
    PASSWORD = "leoeslomas",
    DB = "roles-usuario"
const DB_URL = `mongodb://${USER}:${PASSWORD}@cluster0-shard-00-00.yz03y.mongodb.net:27017,cluster0-shard-00-01.yz03y.mongodb.net:27017,cluster0-shard-00-02.yz03y.mongodb.net:27017/${DB}?ssl=true&replicaSet=atlas-ump2qn-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true,
    useCreateIndex: true

})
.then (db => console.log("mongoDB conectado"))
.catch(error => console.log(error))