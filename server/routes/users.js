const express=require("express");
const isEmpty=require("lodash/isEmpty");
const validator=require('validator');

const router=express.Router();

const validatorInput=(data)=>{
    let errors={};
    if(validator.isEmpty(data.useranme)){
        errors.username='请填写用户名'
    }
    if(validator.isEmail(data.email)){
        errors.email='请填写邮箱'
    }
    if(validator.isEmpty(data.password)){
        errors.password='请填写密码'
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation='请确认密码'
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation="两次密码不同"
    }
    return{
        errors,
        isValid:isEmpty(error)
    }
}

router.post('/',(req,res)=>{
    console.log('<<<<',req.body, res)
    const {errors,isValid}=validatorInput(req.body)

    // console.log(req.body)
    // res.send({
    //     msg:'hello!'
    // })
})

module.exports=router;