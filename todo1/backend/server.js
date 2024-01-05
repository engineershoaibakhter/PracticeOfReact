const express = require('express');
// const dotEnv = require('dotenv');
const app = express();

// dotEnv.config({
//     path: './config/config.env'
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The Server is running at ${PORT}`);
});
