const mongoose = require('mongoose')

const SubmitSchema = new mongoose.Schema({
   name : {
       type : String,
       required : [true, 'Please provide a name!']
   },

   email : {
    type: String,
     match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ]
   },

   subject : {
       type : String,
   },
   message : {
       type : String,
       required : [true, 'leave a message for me!']
   }
})

module.exports = mongoose.model('Submit', SubmitSchema)
