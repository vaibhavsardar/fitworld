const jwt = require('jsonwebtoken');

const User = require("../models/User/UserSchema");

const Authenticate = async (req ,resp , next) => {

    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,'ADHFGJLGLFDGJDHFYGD');

        const rootUser = await User.findOne({ _id:verifyToken._id ,"token":token});

        if(!rootUser){ throw new Error("user not found")}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
    } catch (error) {



        console.log(error);
        resp.status(401).send('Unauthorized : no token is provided');
        
    }

    next();

}

module.exports = Authenticate;