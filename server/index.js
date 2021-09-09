const express = require("express");
const app = express();
app.use(express.json()); 

// app.use('/styles', express.static(path.join(__dirname, './styles.css')))

app.get('/main',(req,res) => {
  res.sendFile(path.join(__dirname, './main.js'))
} ) 



const port = process.env.PORT||6020

app.listen(port, () => {
    console.log(`Server is up and running`)
  })