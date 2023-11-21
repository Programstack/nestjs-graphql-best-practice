const mongoose = require ('mongoose')
const DB = require ('../src/common/dbConfig')

try {
    console.log(`${DB.dburl}/${DB.dbName}`)
    mongoose.connect(`${DB.dburl}/${DB.dbName}`)
    console.log("Database connected")
}catch (error) {
    console.log(error)
}


module.export = mongoose