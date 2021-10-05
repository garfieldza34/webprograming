
const products = require("../../models/mongo/products");
const bcrypt = require("bcryptjs");

// R-Read อ่านข้อมูล
exports.index = async (req, res, next) => {

    let data = await products.find();
    
    res.status(200).json(data);
 
};

//C-Create เพิ่มข้อมูล
exports.insert = async (req,res,next) => {
    
    let data = new products({
       
        productID: req.body.  productID,
        productName: req.body.productName,
        productPrice: req.body. productPrice,
        productStock: req.body. productStock,
        productUnit: req.body.productUnit
    });

    data.save();
    res.status(200).json({
        message:"บันทึกข้อมูลเรียบร้อยแล้ว"
    })


};
//update ข้อมูล
exports.update = async (req, res , next) => {
    const id = "6119d04789ec050a94bc750b";
    const data = {
        productID:"42171",
        productName: "egg",
        productPrice:"200",
        productStock:"50",
        productUnit:"100"
        
};
    
   
    let update = await products.updateOne(
{_id: id},
{
    productID:data.productID,
    productName: data.productName,
    productPrice:data.productPrice ,
    productStock:data.productStock,
    productUnit:data.productUnit
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
    const id = "6119d04789ec050a94bc750b"
    const data = await products.deleteOne(
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
