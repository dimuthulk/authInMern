const router = require('express').Router();
const { User, validate } = require('../models/user.js');

router.post('/', async (req, res) => {
    try{
        const { error } = validate(req.body);
        if (error) 
            return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({ email: req.body.email});
        if (user) 
            return res.status(409).send({message:'User already registered'});

        // const salt = await bcrypt.genSalt(Number(process.env.SALT));
        // const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }).save();
        res.status(201).send({message:'User created successfully'});

    } catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;