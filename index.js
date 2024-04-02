let indexRouter = require('./routes/index');
let express = require('express');
let app = express();
const PORT = 8000;
app.use("/api/", indexRouter);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })


  