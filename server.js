const express = require('express');
const sequelize = require('./config/database');
const path = require('path'); // Add this line

const app = express();
const port = process.env.PORT ;

const excelRoutes = require('./src/routes/excelRoutes');

app.use(express.static('public')); // Serve static files from the public folder

app.use('/api', excelRoutes);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
