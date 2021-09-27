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

    res.status(201).json({
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

exports.login = async (req, res, next) =>{
     //console.log(req.body);
     //console.log(req.body.username);
     //console.log(req.body.password);

    let data = await users.find({ $and: [ 
        { username: req.body.username },
        { password: req.body.password }
     ] });

     console.log(data);
     if(data.length > 0){
        console.log(data.length)
        console.log("มีข้อมูล")
        res.status(200).json({
            username:data[0].username,
            email:data[0].email,
            token:"00000000000",
            status:1,
            message:"เข้าสู่ระบบเรียบร้อย"
        })
     }else{
        console.log(data.length)
        console.log("ไม่มีข้อมูล")
        res.status(200).json({
            status:0,
            message:"ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง"
        })
     }



};