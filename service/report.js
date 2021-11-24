const Report = require('../model/report')

exports.postReport =(req,res)=>{
    console.log('hello')
    const data={
        longtitude:10,
        latitude:10,
        description:'renmal',
        sender:'tom'
    }
    // Report.create(data).then(result=>{
    //     res.status(200).json({ message: 'nice' })
    // }).catch(err=>[
    //     console.log(err)
    // ])
    Report.findOne({sender:'tom'}).then(result=>{
        res.status(200).json({ message: 'nice' })
    })
}