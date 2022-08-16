// declaring the express module
const express =require('express')
const mongoose =require('mongoose')

// initialising the server(app) now this app willse use handlers,middlewares and routes
const app = express()

//routes
const userRoutes=require('../routes/user')
const categoryRoutes=require('../routes/category')
const productRoutes=require('../routes/product')
const cartRoutes=require('../routes/cart')

//middlewares
app.use(express.json())
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',cartRoutes)

//environment variables
const env=require('dotenv')
env.config()




//connecting to the database
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zbq7anb.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log('database connected')
})



//listening the app to the port which is defined in the env file
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
