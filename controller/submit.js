const Submit = require('../model/submit')

const submitMessage = async (req, res) => {
   try {
    console.log(req.body)
    const submit = await Submit.create(req.body)
    res.status(201).json({submit})
   } catch (error) {
       console.log(error)
   }
}

module.exports = submitMessage