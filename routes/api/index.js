const router = require('express').Router();
const quotesRoutes = require('./quotes-routes');
const usersRoutes = require('./users-routes');

router.use('/quotes', quotesRoutes)
router.use('/users', usersRoutes)

module.exports = router;