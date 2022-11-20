const mongoose = require('mongoose');
const app = require('./app');

const {DB_HOST, PORT = 8080} = process.env;

mongoose.connect(DB_HOST)
.then(() => app.listen(PORT, () => {
  console.log(`Database connection successful. Use our API on port: ${PORT}`)
}))
.catch(error => {
  console.log(error.message);
  process.exitCode(1);
});