const Report = require('../model/report')
const crime = ["Bomb", "Gun shot", "Robbery", "Drugs", "Thef"];

function getRandomArbitrary(min, max) {
    var t = Math.floor(Math.random() * (max - min) + min);
    if (t == 5){
        t = 4;
    }
    return t;
}


exports.postReport =(req,res)=>{
    console.log('hello')
    var flag1 = -1;
    var flag2 = -1;
    var flag3 = getRandomArbitrary(0, 5);
    if(Math.random > 0.5){
        flag1 = 1
    }
    if(Math.random > 0.5){
        flag2 = 1
    }

    const data={
        longtitude:37.41061394071311 + Math.random()/500 * flag1,
        latitude:-122.05973521573722 + Math.random()/250 * flag2,
        description: crime[flag3] + " here!",
        time: (new Date()).getTime(),
        sender:'tom',
        crime_type: flag3
    }
    Report.create(data).then(result=>{
        console.log("new report!");
        res.status(200).json({ message: 'nice' })
     }).catch(err=>[
        console.log(err)
     ])
}