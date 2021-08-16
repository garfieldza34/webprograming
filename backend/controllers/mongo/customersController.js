const customers = require("../../models/mongo/customers");

// R-Read อ่านข้อมูล
exports.index = async (req, res, next) => {

    let data = await customers.find();
    
    res.status(200).json(data);
 
};

//C-Create เพิ่มข้อมูล
exports.insert = async (req,res,next) => {
    
    let data = new customers({
    customerID: req.body.customerID,
    customerTitleName: req.body.customerTitleName,
    customerFirstName: req.body.customerFirstName,
    customerLastName: req.body.customerLastName,
    customerAddress: req.body.customerAddress,
    customerTel: req.body.customerTel,
    customerEmail: req.body.customerEmail,
    customerUserName: req.body.customerUserName,
    customerPassword: req.body.customerPassword
    });

    data.save();
    res.status(200).json({
        message:"บันทึกข้อมูลเรียบร้อยแล้ว"
    })


};
//update ข้อมูล
exports.update = async (req, res , next) => {
    const id = "60ebbb81309b601da4011b91";
    const data = {
        username: "Nostria",
        email: "nostria@gmail.com"
    };
   
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
// Delete ลบข้อมูล
exports.delete = async (req, res, next) => {
    const id = "60ebc26265b0e319f4473ed0"
    const data = await users.deleteOne(
        {_id: id }
    );
    if(data.deletedCount === 0){
        res.status(400).json({
            error:"ไม่สามารถลบข้อมูลได้"
        })
    }else{
        res.status(200).json({
            message:"ลบข้อมูลเรียบร้อยแล้ว"
        })
    }
};