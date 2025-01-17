// const joi = require("joi");

// const registerValidation = (req , res , next) => {
//     const schema = joi.object({
//         name : joi.string().max(50).required() , 
//         email : joi.string().email().required() ,
//         password : joi.string().min(8).max(50).required()
//     });
//     const {err} = schema.validate(req.body);
//     if(err){
//         return res.status(400)
//         .json({message:"Poor Validation Request" , err})
//     }
//     next();
// }

// const loginValidation = (req , res , next) => {
//     const schema = joi.object({
//         email : joi.string().email().required() ,
//         password : joi.string().min(8).max(50).required()
//     });
//     const {err} = schema.validate(req.body);
//     if(err){
//         return res.status(400)
//         .json({message:"Poor Validation Request" , err})
//     }
//     next();
// }

// module.exports = {
//     registerValidation ,
//     loginValidation
// }


const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}
module.exports = {
    signupValidation,
    loginValidation
}