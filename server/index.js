const express = require("express");
const app = express();
app.use(express.json()); 

app.get('/', express.static(path.join(__dirname, './styles.css'))) 



const port = process.env.PORT||6020

app.listen(port, () => {
    console.log(`Server is up and running`)
  })