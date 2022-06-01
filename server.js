const express = require("express");
const app = express();

app.get("/", function(request, response) {
    request.send("Hello")
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
});