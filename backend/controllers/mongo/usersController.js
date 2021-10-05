const users = require("../../models/mongo/users");
const bcrypt = require("bcryptjs");

// CRUD
// R-Read อ่านข้อมูล
exports.index = async (req, res, next) => {
    let data = await users.find();
    res.status(200).json(data);
};

// C-Create เขียนข้อมูล เพิ่มข้อมูล
exports.insert = async (req, res, next) => {
    let data = new users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    data.save();
    res.status(201).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
};

// U-Update แก้ไขข้อมูล
exports.update = async (req, res, next) => {

    const id = "60ebc223051284187c4191a9";

    const data = {
        username: "thailand",
        email: "thai@gmail.com"
    }

    let update = await users.updateOne(
        { _id: id },
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

// D-Delete ลบข้อมูล
exports.delete = async (req, res, next) => {

    const id = "60ebc73ea54dca1ab964633d";

    const data = await users.deleteOne(
        { _id: id }
    );

    if(data.deletedCount === 0){
        res.status(400).json({
            error: "ไม่สามารถลบข้อมูลได้"
        });
    } else {
        res.status(200).json({
            message: "ลบข้อมูลเรียบร้อยแล้ว"
        });
    }

};

// Login การตรวจสอบเข้าสู่ระบบ
exports.login = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.body.username);
    // console.log(req.body.password);

    // select * from users where username = "eeee" and password = "eeee"
    // let data = await users.find({ $and: [ 
    //         { username: req.body.username },
    //         { password: req.body.password } 
    //     ]});

    // select * from users where username = "??????"
    let data = await users.find({ username: req.body.username });

    if(data.length > 0){
        bcrypt
            .compare(req.body.password, data[0].password)
            .then(async function(check) {
                if(check){
                    res.status(200).json({
                        username: data[0].username,
                        email: data[0].email,
                        token: "dsafghjocmmisiohoghikjpdg",
                        status: 1,
                        message: "เข้าสู่ระบบเรียบร้อย"
                    });
                } else {
                    res.status(200).json({
                        status: 0,
                        message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง"
                    })
                }
            });

    } else {
        res.status(200).json({
            status: 0,
            message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง"
        })
    }
    
};