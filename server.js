const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});





// connection function that will start the express server on port 3001
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});