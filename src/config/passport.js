const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

require('dotenv').config()


const options = {};
options.jwtFromRequest = ExtractJwt.fromHeader('authorization');
options.secretOrKey = process.env.JWT_KEY;

module.exports = (passport, userModel) => {
    passport.use(new JwtStrategy(options, async (jwt_payload, next) => {
        let user = await userModel.findById(jwt_payload._id)
        if (user) {
            return next(null, user)
        }
        return next(null, false)
    }))
}