const userModel= require('../userModel');
const userModelController={};

userModelController.getAllUsers= async (req, res)=>{
    const users= await userModel.find()
    res.json(users);
}

/*userModelController.getUser= async(req, res)=>{
    const users= await userModel.findById(req.params.id);
    res.json(users);
}*/

userModelController.createUser= async(req, res)=>{
    const{name}= req.body;
    const user= new userModel({
        name
    });
    await user.save();
    res.json({message:'created user'});
    
}

/*userModelController.deleteUser= async(req,res)=>{
    const users= await userModel.findByIdAndDelete(req.params.id);
    res.json({
        message: 'delete user'
    }); 
};*/

module.exports= userModelController;