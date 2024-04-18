// //fetch is a brower's web API
// //node js execute JS from outside of browser
import express from "express";

const app = express()
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
