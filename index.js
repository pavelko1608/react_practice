const express = require("express")

const app = express()

app
.use(express.static(__dirname + '/public'))
.set('views', __dirname + '/public/views')
.engine('html', require('ejs').renderFile)
.set('view engine', 'html')
.get("*", (req, res) => {
  res.render("index")
})
.listen(3000, () => {
  console.log("Started listening on port 3000")
})
