const express =require('express')

require('./config/connect')



const app =express();
// create application/json parser

const routerUsers =require('./routes/users')

app.use('/api',routerUsers)

app.listen(3700,()=>{
    console.log("server work")

    

})