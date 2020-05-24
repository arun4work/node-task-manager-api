const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        //verify JWT authentication
        const decoded = jwt.verify(token, 'mynodecourse');
        //verify User auth through MONGO DB
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token});
        if (!user) {
            throw new Error();
        }
        //set in req to get user details in router rather than fetching from Mongo DB again
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send({error: 'Please authenticate.'});
    }
};
module.exports = auth;
