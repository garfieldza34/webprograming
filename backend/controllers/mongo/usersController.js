const users = require("../../models/mongo/users");

exports.index = async (req, res, next) => {

    let data = await users.find();
    
    res.status(200).json(data);
 
};

exports.insert = async (req, res, next) => {

    let data = new users( {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    data.save();

    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
};

exports.update = async (req, res, next) => {

    const id = "60ebbc69f217432aa40790bd";

    const data = {
        username: "thailand",
        email: "thai@gmail.com"
    }

    let update = await users.updateOne(

        {_id: id},
        {
            username: data.username,
            email: data.email
        }
    );

    if(update.nModified === 0){
        res.status(400).json({
            error: "ไม่สามารถแก้ไขข้อมูลได้"
        });
    } else {
        res.status(200).json({
            data: "แก้ไขข้อมูลเรียบร้อยแล้ว"
        });
           
    }

};

exports.delete = async (req, res, next) => {

    const id = "610754cb8ccdec0900f29f65";

    const data = await users.deleteOne(
        {_id: id}
    );

    if(data.deleteCount === 0){
        res.status(400).json({
            error: "ไม่สามารถลบข้อมูลได้"
        });
    } else {
        res.status(400).json({
            massage: "ลบข้อมูลเรียบร้อยแล้ว"
        });
    }

};