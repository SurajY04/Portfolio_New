const express = require('express')
const cors = require('cors')
const { sendEmail } = require('./services/email.api')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin : 'http://localhost:5173'
}))

app.post('/api/contact' , async (req , res) => {
    const {name , email , message} = req.body;

    console.log(req.body)

    if(!name || !email || !message){
        return res.status(400).json({
            message : "Required fields is empty"
        })
    }

    const result = await sendEmail(email , name , message)

    return res.status(200).json({
            success: true,
            message: "Notified Successfully"
        });
})

module.exports = app