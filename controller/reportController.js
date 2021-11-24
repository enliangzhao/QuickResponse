const reportService = require('../service/report')

exports.postReport = (req,res)=>{
    reportService.postReport(req,res)
}
