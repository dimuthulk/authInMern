const router = require('express').Router();
const { User} = require('../models/user.js');
const Joi = require('joi');
// const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try{
        const { error } = validate(req.body);
        if (error) 
            return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({ email: req.body.email});
        if (!user) 
            return res.status(401).send({message:'Invalid email or password'});

        const validPassword = await User.findOne({ password: req.body.password});
        if (!validPassword) 
            return res.status(401).send({message:'Invalid email or password'});

        res.status(200).send({message:'Login successful',user:user});

        // const validPassword = await bcrypt.compare(req.body.password,user.password);
        // if (!validPassword) 
        //     return res.status(401).send({message:'Invalid email or password'});

        // const token = user.generateAuthToken();
        // res.status(200).send({data:token, message:'Login successful'});
    } catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(3).max(20).required().label('Password')
    });
    return schema.validate(data);
}
module.exports = router;