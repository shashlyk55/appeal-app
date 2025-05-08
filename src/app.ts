const express = require('express')
const appealRoutes = require('./Route/appeal.route')
//const ErrorHandlerMiddleware = require('./Middleware/ErrorHandler')
import {ErrorHandlerMiddleware} from './Middleware/ErrorHandler'

const app = express()
app.use(express.json())
app.use('/api/appeal', appealRoutes)
app.use(ErrorHandlerMiddleware)


app.listen(3000, 'localhost', () => {
    console.log('server started on http://localhost:3000');
})