const Submit = require('../model/submit')

exports.getOverview = async (req, res, next) => {

    const submit = await Submit.find()
  
    
    res.status(200).render('overview', {
      title: 'name',
      Submit
    });
  };