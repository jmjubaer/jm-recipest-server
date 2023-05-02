const express = require('express');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running at http://localhost:5000')
  })
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })