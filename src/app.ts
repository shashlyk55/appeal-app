const express = require('express')



const app = express()



app.listen(3000, 'localhost', () => {
    console.log('server started on http://localhost:3000');
})