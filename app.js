const express = require("express")
const PORT = process.env.PORT || 3000;
const app = express



app.listen(PORT, (res,req)=>{
    console.log(`Server is running on port ${PORT}`)
})