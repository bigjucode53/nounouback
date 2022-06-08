/*MIDDLEWARE LIMITANT LE NOMBRE MAXIMAL DE TENTATIVES D'AUTHENTIFICATION (CONTRE BRUTE FORCE) */

const rateLimit = require("express-rate-limit");

//Limitation du nombre de tentatives de connexion
const authLimiter = rateLimit({
    windowMs : 60 * 1000, 
    max: 1000, 
    message: "Vous avez dépassé le nombre maximal de tentatives, merci de réessayer ultérieurement."
});



module.exports = { authLimiter }