const Report = require('../model/report')

class crimehistoryController{
    static async getResult(req, res) {
        const Report = require('../model/report')
        var ret = await Report.find({});
        var distance = Number(req.body.distance)/1000;
        console.log(req.body);
        
        var start = new Date(req.body.start).getTime();
        var end = new Date(req.body.end).getTime();
        console.log(start);
        console.log(end);
        var arr = [];
        var distance_arr = [];
        for (const ele of ret){
            if (ele.time < start || !ele.time>end) {
                continue;
            }
            if (distance >= (ele.longtitude - 37.4) * (ele.longtitude - 37.4) + (ele.latitude + 122) * (ele.latitude + 122)) {
                var index = distance_arr.length;
                var tmp = (ele.longtitude - 37.4) * (ele.longtitude - 37.4) + (ele.latitude + 122) * (ele.latitude + 122);
                for (var i = 0; i< distance_arr.length; i++ ){
                    if (tmp <= distance_arr[i]) {
                        index = i;
                        break;
                    }
                }
                if (index == distance_arr.length) {
                    distance_arr.push(tmp);
                    arr.push(ele);
                }
                else {
                    distance_arr.splice(index, 0 , tmp);
                    arr.splice(index, 0, ele);
                }
            }
        }
        res.status(200).send(arr);
    }
}

module.exports = crimehistoryController;