const requireTime = function(req, res, next){
    req.requireTime = Date.now()
    next()
}
module.exports = requireTime