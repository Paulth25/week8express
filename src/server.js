const express = require("express");
const app = express();
//app.listen methd takes two arguments a port number and a request to listen too ! 3000 create react app - 5000/8000 are the most u will see, NOTHING SPECIAL JUST COMMON
const port = process.env.PORT || 5000 //use our env, if not use 5000 port- local we have a say on port but online we do not decide


app.listen (port, () => {
    console.log("listening on port 5000")
});