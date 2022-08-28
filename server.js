const express = require('express');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', require('./routes/routes'));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port 5000`);
})