import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import './db/index'

dotenv.config()

const app = express() 
const PORT = process.env.PORT || 5000

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())

app.get('/api/health', (req, res) => {
    res.json({status : 'server is running'})
})

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})

export default app