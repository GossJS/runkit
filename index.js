const x = require('express');
const app = x();
app
.get('/', (req, res) => res
  .status(200)
  .set({"Content-Type":"application/json; charset=utf-8"})
  .end('{"Hello":"world!"}')
)
.listen(process.env.PORT); // !!! Heroku
